const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// create our Alien model
class Alien extends Model {
  static upvote(body, models) {
    return models.Vote.create({
      user_id: body.user_id,
      alien_id: body.alien_id
    }).then(() => {
      return Alien.findOne({
        where: {
          id: body.alien_id
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
            model: models.Comment,
            attributes: ['id', 'comment_text', 'alien_id', 'user_id', 'created_at'],
            include: {
              model: models.User,
              attributes: ['username']
            }
          }
        ]
      });
    });
  }
}

// create fields/columns for Alien model
Alien.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    alien_url: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isURL: true
      }
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'user',
        key: 'id'
      }
    }
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'alien'
  }
);

module.exports = Alien;