import express from "express";
import {
  httpCreateUser,
  httpGetAllUsers,
  httpGetUserByEmail,
  httpUpdateUser,
  httpDeleteUser,
  httpUpdateUserSubscription,
  httpGetUserSubscription
} from "./user.controller.js";

const userRouter = express.Router();

userRouter.post("/", httpCreateUser);
userRouter.get("/", httpGetAllUsers);
userRouter.get("/:email", httpGetUserByEmail);
userRouter.put("/:email", httpUpdateUser);
userRouter.delete("/:email", httpDeleteUser);
userRouter.put("/subscription/:email", httpUpdateUserSubscription);
userRouter.get("/subscription/:email", httpGetUserSubscription);

export default userRouter;
