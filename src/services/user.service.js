const UserModel = require(`../database/models/user.database`)

module.exports = {

  createUserService: async (user) => {
    return await UserModel.create(user)
  },

  readUserFromIdService: async (id) => {
    return await UserModel.findOne({where: {id}})
  },

  updateUserFromIdService: async (name, id) => {
    return await UserModel.update({name}, {where: {id}})
  }
}
