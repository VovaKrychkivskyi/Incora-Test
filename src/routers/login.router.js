const {Router} = require(`express`);
const {
  loginController: {
    login
  }
} = require(`../controllers`)

const {authMiddleware} = require(`../middlewares`)

const loginRouter = Router();

loginRouter.post(`/`, authMiddleware, login);

module.exports = loginRouter;