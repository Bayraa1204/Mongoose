const mongoose = require("mongoose");
const userModel = require("../Model/userModel");

const connectToDB = async () => {
  res = await mongoose.connect(
    "mongodb+srv://Bayraa:R*b4sdHJzFze5Nr@first.0zqdv.mongodb.net/?retryWrites=true&w=majority&appName=first"
  );
  if (res) console.log("db connected");
};
connectToDB();

const getUsers = async (req, res) => {
  try {
    const response = await userModel.find();
    res.send(`Users => ${response}`);
  } catch (error) {
    res.send(`error => ${error}`);
  }
};

const createUser = async (req, res) => {
  try {
    const body = req.body;
    const response = await userModel.create(body);
    console.log(response);
    res.send("done");
  } catch (error) {
    console.log(error);
    res.send(`error => ${error}`);
  }
};

const updateUser = async (req, res) => {
  try {
    const body = req.body;
    const response = await userModel.findByIdAndUpdate(
      body.id,
      { username: body.username },
      { new: true }
    );
    res.send(response);
  } catch (error) {
    res.send(`error => ${error}`);
  }
};

const deleteUser = async (req, res) => {
  try {
    const body = req.body;
    const { id } = body;
    const response = await userModel.findByIdAndDelete(id);
    console.log(response);
  } catch (error) {
    res.send(`error => ${error}`);
  }
};

module.exports.getUsers = getUsers;
module.exports.createUser = createUser;
module.exports.updateUser = updateUser;
module.exports.deleteUser = deleteUser;
