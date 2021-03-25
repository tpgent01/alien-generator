const router = require('express').Router();
const sequelize = require('../../config/connection');
const { Alien, Comment, User, Vote } = require('../../models');
const withAuth = require('../../utils/auth');

//get all aliens
router.get('/', (req, res) => {
    console.log('======================');
    Alien.findAll({
      attributes: [
        'id',
        'lifeform',
        'created_at',
        [sequelize.literal('(SELECT COUNT(*) FROM vote WHERE alien.id = vote.alien_id)'), 'vote_count']
      ],
      order: [['vote_count', 'DESC']],
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
      .then(dbAlienData => res.json(dbAlienData))
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
});


//get single alien
router.get('/:id', (req, res) => {
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
        res.json(dbAlienData);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
});

router.post('/', withAuth, (req, res) => {
    if (req.session) {
      Alien.create({
        lifeform: req.body.lifeform,
        user_id: req.session.user_id
      })
        .then(dbAlienData => res.json(dbAlienData))
        .catch(err => {
          console.log(err);
          res.status(500).json(err);
        });
    }
});

router.put('/upvote', withAuth, (req, res) => {
  // custom static method created in models/Post.js
  Alien.upvote({ ...req.body, user_id: req.session.user_id }, { Vote, Comment, User })
    .then(updatedVoteData => res.json(updatedVoteData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.put('/:id', withAuth, (req, res) => {
    Alien.update(
      {
        lifeform: req.body.lifeform
      },
      {
        where: {
          id: req.params.id
        }
      }
    )
      .then(dbAlienData => {
        if (!dbAlienData) {
          res.status(404).json({ message: 'No alien found with this id' });
          return;
        }
        res.json(dbAlienData);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
});

router.delete('/:id', withAuth, (req, res) => {
    console.log('id', req.params.id);
    Alien.destroy({
      where: {
        id: req.params.id
      }
    })
      .then(dbAlienData => {
        if (!dbAlienData) {
          res.status(404).json({ message: 'No alien found with this id' });
          return;
        }
        res.json(dbAlienData);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
});
  
module.exports = router;