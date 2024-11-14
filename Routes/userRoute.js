const Router = require("express");
const userRouter = Router();
const userController = require("../Controller/userController");

module.exports = userRouter;

userRouter.get("/getUsers", userController.getUsers);
userRouter.post("/createUser", userController.createUser);
userRouter.put("/updateUser", userController.updateUser);
userRouter.delete("/deleteUser", userController.deleteUser);
