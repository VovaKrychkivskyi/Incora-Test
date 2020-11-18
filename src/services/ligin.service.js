const TokenModel = require(`../database/models/token.database`)
const UserModel = require(`../database/models/user.database`)

module.exports = {

  readUserFromEmailService: async (email) => {
    return await UserModel.findOne({where: {email}})
  },

  sendTokenInDBService: async (tokens) => {
    return await TokenModel.create(tokens)
  }

}
