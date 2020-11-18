const {Router} = require(`express`);
const {
  userController: {
    createUser,
    readUserFromId,
    updateUserFromId
  }
} = require(`../controllers`)
const {
  existUserFalseMiddleware,
  existUserTrueMiddleware
} = require(`../middlewares`)

const userRouter = Router();

userRouter.post(`/`, existUserFalseMiddleware, createUser);
userRouter.get(`/:id`, existUserTrueMiddleware, readUserFromId);
userRouter.put(`/:id`, existUserTrueMiddleware, updateUserFromId);

module.exports = userRouter;