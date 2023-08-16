import express from "express";
import User from "../Models/UserModel.js";
import Content from "../Models/ContentModel.js";
import List from "../Models/ListModel.js";
import {data} from "../data.js";

const seedRouter = express.Router();

seedRouter.get("/", async (req, res) => {
  try {

    await User.deleteMany({});
    await Content.deleteMany({});
    await List.deleteMany({});

    const createdUsers = await User.insertMany(data.users); 
    const createdContents = await Content.insertMany(data.content);

    res.send({createdUsers, createdContents});
  } catch (e) {
    console.log("failed to update " + e.message);
  }
});

export default seedRouter;

