const {Model, DataTypes} = require('sequelize');
const sequelize = require('../../configs/sequelize.config');

class UserModel extends Model {
}

UserModel.init({
  first_name: {
    type: DataTypes.STRING,
  },
  last_name: {
    type: DataTypes.STRING,
  },
  email: {
    type: DataTypes.STRING
  },
  phone: {
    type: DataTypes.STRING
  },
  password: {
    type: DataTypes.STRING
  },
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement:true
  }
}, {
  sequelize,
  modelName: `usertable`,
  tableName: `usertable`,
  timestamps: false
})
module.exports = UserModel;