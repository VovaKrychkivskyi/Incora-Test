const {
  userService: {
    createUserService,
    readUserFromIdService,
    updateUserFromIdService
  }
} = require(`../services`)
const {hashedPassword} = require(`../utils`)

module.exports = {
  createUser: async (req, res, next) => {
    try {
      req.body.password = await hashedPassword(req.body.password);
      const user = await createUserService(req.body)
      res.json(user)
    }
    catch (e) {
      next(e)
    }
  },

  readUserFromId: async (req, res, next) => {
    try {
      const user = await readUserFromIdService(req.id)
      res.json(user)
    }
    catch (e) {
      next(e)
    }
  },

  updateUserFromId: async (req, res, next) => {
    try {
      const user = await updateUserFromIdService(req.name, req.id)
      res.json(user)
    }
    catch (e) {
      next(e)
    }
  }
}