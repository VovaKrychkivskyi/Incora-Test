const jwt = require(`jsonwebtoken`)

module.exports = () => {

  const access_token = jwt.sign({}, `secret`, {expiresIn: `1m`})
  const refresh_token = jwt.sign({}, `newSecret`, {expiresIn: `2m`})

  return {
    access_token,
    refresh_token
  }

}