const {
  loginService: {
    readUserFromEmailService,
    sendTokenInDBService
  }
} = require(`../services`)

module.exports = {
  login: async (req, res, next) => {
    try {
      const tokens = {
        "user_id": req.id,
        "access_token": req.access_token,
        "refresh_token": req.refresh_token
      }

      await sendTokenInDBService(tokens)
      res.end(tokens)

    } catch (e) {
      next(e)
    }
  }
}