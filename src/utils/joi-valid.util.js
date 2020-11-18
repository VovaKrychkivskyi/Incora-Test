const joi = require(`joi`)
const {EMAIL, PHONE} = require(`../configs/const.config`)

module.exports = joi.object().keys({
  first_name: joi.string().alphanum().trim().min(3).max(10).required(),
  last_name: joi.string().alphanum().trim().min(3).max(10).required(),
  email: joi.string().trim().regex(EMAIL).max(30).required(),
  phone:joi.string().regex(PHONE).max(10).required(),
  password: joi.string().trim().min(3).max(10).required()
})