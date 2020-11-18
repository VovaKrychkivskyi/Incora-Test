'use strict';

const {DataTypes} = require(`sequelize`)

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable(`tokenTable`, {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      access_token:{
        type:DataTypes.STRING,
      },
      refresh_token: {
        type: DataTypes.STRING,
      },
      user_id: {
        type: DataTypes.INTEGER,
      }
    })
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable(`tokenTable`)
  }
};
