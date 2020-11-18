const {Model, DataTypes} = require('sequelize');
const sequelize = require('../../configs/sequelize.config');

class TokenModel extends Model {
}

TokenModel.init({
  user_id: {
    type: DataTypes.INTEGER
  },
  access_token: {
    type: DataTypes.STRING,
  },
  refresh_token: {
    type: DataTypes.STRING,
  },

  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  }
}, {
  sequelize,
  modelName: `tokentable`,
  tableName: `tokentable`,
  timestamps: false
})
module.exports = TokenModel;