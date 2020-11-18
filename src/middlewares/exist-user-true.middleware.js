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
    const {id} = req.params;
    const user = await readUserFromIdService(id)

    if (!user) {
      return next(new ErrorHandler(
        statusCodes.NOT_FOUND,
        errors.NOT_FOUND_USER.message,
        errors.NOT_FOUND_USER.code
      ))
    }

    req.id = id;
    req.name = user.first_name;

    next()

  } catch (e) {
    next(e)
  }
}