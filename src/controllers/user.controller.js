const {
  userService: {
    createUserService,
    readUserFromIdService,
    updateUserFromIdService
  }
} = require(`../services`)

module.exports = {

  createUser: async (req, res, next) => {
    try {
      const user = await createUserService(req.body)
      res.json(user)
    }
    catch (e) {
      next(e)
    }
  },

  readUserFromId: async (req, res, next) => {
    try {
      const user = await readUserFromIdService(req.params.id)
      res.json(user)
    }
    catch (e) {
      next(e)
    }
  },

  updateUserFromId: async (req, res, next) => {
    try {
      console.log(1111, req.body.first_name);
      console.log(2222, req.params.id);
      const user = await updateUserFromIdService(req.body.first_name, req.params.id)
      res.json(user)
    }
    catch (e) {
      next(e)
    }
  }

}