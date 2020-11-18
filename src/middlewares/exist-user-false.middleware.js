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
const {joiValidation} = require(`../utils`)

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

    const {error} = joiValidation.validate(req.body)

    if (error) {
      return next(new ErrorHandler(
        error.details[0].message,
        statusCodes.BAD_REQUEST,
        errors.BAD_REQUEST_NOT_VALID_USER.code))
    }

    next()

  } catch (e) {
    next(e)
  }
}