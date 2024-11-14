const express = require("express");
const app = express();
const userRouter = require("./Routes/userRoute");
app.use(express.json());

app.use("/user", userRouter);

app.listen(8080, console.log("your server is running on port 8080"));
