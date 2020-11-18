const bcrypt = require(`bcrypt`);
const {errors, ErrorHandler, statusCodes} = require('../errors')

module.exports = async (password, hashedPass) => {

  const isCorrectPassword = await bcrypt.compare(password, hashedPass)

  if (!isCorrectPassword) {
    throw new ErrorHandler(
      errors.NOT_FOUND_USER.message,
      statusCodes.NOT_FOUND,
      errors.NOT_FOUND_USER.code)
  } else {
    return isCorrectPassword
  }
}