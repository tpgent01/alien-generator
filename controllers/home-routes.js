const router = require('express').Router();
const sequelize = require('../config/connection');
const { Alien, Comment, User, Vote } = require('../models');

// get all aliens for homepage
router.get('/', (req, res) => {
  console.log('======================');
  Alien.findAll({
    attributes: [
      'id',
      'lifeform',
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

<<<<<<< HEAD
      res.render('pages/homepage', {
=======
      res.render('pages/home', {
>>>>>>> 56ef0a01226594aec542789e4ce3d2f40bffa80c
        aliens,
        loggedIn: req.session.loggedIn
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// get single alien
router.get('/alien/:id', (req, res) => {
  Alien.findOne({
    where: {
      id: req.params.id
    },
    attributes: [
      'id',
      'lifeform',
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
      if (!dbAlienData) {
        res.status(404).json({ message: 'No alien found with this id' });
        return;
      }

      const alien = dbAlienData.get({ plain: true });

      res.render('single-alien', {
        alien,
        loggedIn: req.session.loggedIn
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }

  res.render('login');
});
<<<<<<< HEAD

module.exports = router;


=======
  
module.exports = router;
>>>>>>> 56ef0a01226594aec542789e4ce3d2f40bffa80c
