// import all models
const Alien = require('./Alien');
const User = require('./User');
const Vote = require('./Vote');
const Comment = require('./Comment');

// create associations
User.hasMany(Alien, {
  foreignKey: 'user_id'
});

Alien.belongsTo(User, {
  foreignKey: 'user_id',
  onDelete: 'SET NULL'
});

User.belongsToMany(Alien, {
  through: Vote,
  as: 'voted_aliens',

  foreignKey: 'user_id',
  onDelete: 'SET NULL'
});

Alien.belongsToMany(User, {
  through: Vote,
  as: 'voted_aliens',
  foreignKey: 'alien_id',
  onDelete: 'SET NULL'
});

Vote.belongsTo(User, {
  foreignKey: 'user_id',
  onDelete: 'SET NULL'
});

Vote.belongsTo(Alien, {
  foreignKey: 'alien_id',
  onDelete: 'SET NULL'
});

User.hasMany(Vote, {
  foreignKey: 'user_id'
});

Alien.hasMany(Vote, {
  foreignKey: 'alien_id'
});

Comment.belongsTo(User, {
  foreignKey: 'user_id',
  onDelete: 'SET NULL'
});

Comment.belongsTo(Alien, {
  foreignKey: 'alien_id',
  onDelete: 'SET NULL'
});

User.hasMany(Comment, {
  foreignKey: 'user_id',
  onDelete: 'SET NULL'
});

Alien.hasMany(Comment, {
  foreignKey: 'alien_id'
});

module.exports = { User, Alien, Vote, Comment };