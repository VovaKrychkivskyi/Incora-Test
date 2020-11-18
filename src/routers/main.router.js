const {Router} = require(`express`);

const {userRouter, loginRouter} = require(`./`)
const mainRouter = Router();

mainRouter.use(`/users`, userRouter);
mainRouter.use(`/login`, loginRouter);

module.exports = mainRouter;