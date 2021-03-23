const router = require('express').Router();
const sequelize = require('../config/connection');
const { Alien, Comment, User, Vote } = require('../models');
const withAuth = require('../utils/auth');

// get all aliens for dashboard
router.get('/', withAuth, (req, res) => {
    console.log(req.session);
    console.log('======================');
    Alien.findAll({
      where: {
        user_id: req.session.user_id
      },
      attributes: [
        'id',
        'alien_url',
        'title',
        'created_at',
        [sequelize.literal('(SELECT COUNT(*) FROM vote WHERE alien.id = vote.alien_id)'), 'vote_count']
      ],
      include: [
        {
          model: Comment,
          attributes: ['id', 'comment_text', 'user_id', 'alien_id', 'created_at'],
          include: {
            model: User,
            attributes: ['username']
          }
        },
        {
          model: User,
          attributes: ['username']
        }
      ]
    })
      .then(dbAlienData => {
        const aliens = dbAlienData.map(alien => alien.get({ plain: true }));
        res.render('dashboard', { aliens, loggedIn: true });
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });

  router.get('/edit/:id', withAuth, (req, res) => {
    Alien.findByPk(req.params.id, {
      attributes: [
        'id',
        'alien_url',
        'title',
        'created_at',
        [sequelize.literal('(SELECT COUNT(*) FROM vote WHERE alien.id = vote.alien_id)'), 'vote_count']
      ],
      include: [
        {
          model: Comment,
          attributes: ['id', 'comment_text', 'user_id', 'alien_id', 'created_at'],
          include: {
            model: User,
            attributes: ['username']
          }
        },
        {
          model: User,
          attributes: ['username']
        }
      ]
    })
      .then(dbAlienData => {
        if (dbAlienData) {
          const alien = dbAlienData.get({ plain: true });
          
          res.render('edit-alien', {
            alien,
            loggedIn: true
          });
        } else {
          res.status(404).end();
        }
      })
      .catch(err => {
        res.status(500).json(err);
      });
  });
  
  module.exports = router;