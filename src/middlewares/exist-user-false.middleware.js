const {
  userService: {
    readUserFromIdService
  }
} = require(`../services`);

const {
  ErrorHandler,
  errors,
  statusCodes
} = require(`../errors`)

module.exports = async (req, res, next) => {

  try {
    const {email} = req.body
    const user = await readUserFromIdService(email)

    if (user) {
      return next(new ErrorHandler(
        statusCodes.BAD_REQUEST,
        errors.BAD_REQUEST_EMAIL_EXISTS.message,
        errors.BAD_REQUEST_EMAIL_EXISTS.code,
      ))
    }
    next()

  } catch (e) {
    next(e)
  }
}