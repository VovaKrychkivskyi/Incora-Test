const {Router} = require(`express`);

const {
  userController: {
    createUser,
    readUserFromId,
    updateUserFromId
  }
} = require(`../controllers`)

const userRouter = Router();

userRouter.post(`/`, createUser);
userRouter.get(`/:id`, readUserFromId);
userRouter.put(`/:id`, updateUserFromId);

module.exports = userRouter;