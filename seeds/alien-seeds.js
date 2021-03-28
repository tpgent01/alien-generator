const { Alien } = require('../models');

const aliendata = [
  {
    lifeform: 'Test1',
    user_id: 1
  },
  {
    lifeform: 'Test2',
    user_id: 1
  },
  {
    lifeform: 'Test3',
    user_id: 2
  },
  {
    lifeform: 'Test4',
    user_id: 3
  }
];

const seedPosts = () => Alien.bulkCreate(aliendata);

module.exports = seedPosts;