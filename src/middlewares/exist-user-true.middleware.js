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
    const {id} = req.params;
    const user = await readUserFromIdService(id)

    if (!user) {
      return next(new ErrorHandler(
        statusCodes.NOT_FOUND,
        errors.NOT_FOUND_USER.message,
        errors.NOT_FOUND_USER.code
      ))
    }

    const {error} = joiValidation.validate(req.body)

    if (error) {
      return next(new ErrorHandler(
        error.details[0].message,
        statusCodes.BAD_REQUEST,
        errors.BAD_REQUEST_NOT_VALID_USER.code))
    }

    req.id = id;
    req.name = user.first_name;

    next()

  } catch (e) {
    next(e)
  }
}