const {
  loginService: {
    readUserFromEmailService
  }
} = require(`../services`)

const {
  ErrorHandler,
  statusCodes,
  errors
} = require(`../errors`)

const {
  newTokens,
  comparePassword
} = require(`../utils`)

module.exports = async (req, res, next) => {

  try {
    const user = req.body
    const isUserInDB = await readUserFromEmailService(user.email)

    if (!isUserInDB) {
      throw new ErrorHandler(
        errors.NOT_FOUND_USER.message,
        statusCodes.NOT_FOUND,
        errors.NOT_FOUND_USER.code)
    }

    let token
    const isCorrectPassword = await comparePassword(user.password, isUserInDB.dataValues.password)

    if (isCorrectPassword) {
      token = newTokens()
    } else {
      throw new ErrorHandler(
        errors.BAD_REQUEST_NOT_VALID_USER.message,
        statusCodes.BAD_REQUEST,
        errors.BAD_REQUEST_NOT_VALID_USER.message)
    }
    const {access_token, refresh_token} = token

    req.access_token = access_token
    req.refresh_token = refresh_token
    req.id = isUserInDB.dataValues.id

    res.json(token)
    next()

  } catch (e) {
    next(e)
  }
}
