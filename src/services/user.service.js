const UserModel = require(`../database/models/user.database`)

module.exports = {

  createUserService: async (user) => {
    console.log(user);
    return await UserModel.create(user)
  },

  readUserFromIdService: async (id) => {
    return await UserModel.findOne({where: {id}})
  },

  updateUserFromIdService: async (name, id) => {
    const updateUser = await UserModel.update({name}, {where: {id}})
    console.log(`${name} life is good, it's push msg`)
    return updateUser
  }

}
