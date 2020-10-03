import express from "express";
import routes from "../routes.js";
import {
  userDetail,
  editProfile,
  changePassword,
} from "../controllers/userController.js";
import { onlyPrivate } from "../middlewares.js";

const userRouter = express.Router();

userRouter.get(routes.editProfile, onlyPrivate, editProfile);
userRouter.get(routes.changePassword, onlyPrivate, changePassword);
userRouter.get(routes.userDetail(), userDetail);

export default userRouter;
