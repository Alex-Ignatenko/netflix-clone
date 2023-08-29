import express from "express";
import expressAsyncHandler from "express-async-handler";
import bcrypt from "bcryptjs";
import User from "../Models/UserModel.js";
import { generateToken, isAuth } from "../Services/authService.js";
import List from "../Models/ListModel.js";
import Content from "../Models/ContentModel.js";

const userRouter = express.Router();

userRouter.post(
  "/signin",
  expressAsyncHandler(async (req, res) => {
    const user = await User.findOne({ email: req.body.email });
    console.log(user);
    if (user && (await bcrypt.compare(req.body.password, user.password))) {
      res.send({
        _id: user._id,
        username: user.username,
        email: user.email,
        token: generateToken(user),
      });
      return;
    }
    res.status(401).send({ message: "Invalid Credentials" });
  })
);

userRouter.post(
  "/signup",
  expressAsyncHandler(async (req, res) => {
    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: bcrypt.hashSync(req.body.password),
    });
    new List({ name: newUser.username + "`s List", contents: [] }).save();
    const user = await newUser.save();
    res.send({
      _id: user._id,
      username: user.username,
      email: user.email,
      token: generateToken(user),
    });
  })
);

userRouter.get(
  "/getuserlist",
  isAuth,
  expressAsyncHandler(async (req, res) => {
    try {
      const data = await List.findOne({ name: req.query.name });
      let response = [];
      for (let i = 0; i < data.contents.length; i++) {
        let c = await Content.findById(data.contents[i]);
        response.push(c);
      }
      res.status(200).json(response);
    } catch (error) {
      res.status(500).json(error);
    }
  })
);

userRouter.post(
  "/updateuserlist/:id",
  isAuth,
  expressAsyncHandler(async (req, res) => {

    try {
      // console.log(req.user);
      let list = await List.findOne({
        name: req.user.username + "`s List",
      });
      if (list.contents.includes(req.params.id)) {
        console.log(req.params.id)
        console.log("before remove: " + list.contents);
        list.contents = await list.contents.filter((c) => c !== req.params.id);
        list.save();
        console.log("------------------------------------------------------")
        console.log("after remove: " + list.contents);

      } else {
        list.contents.push(req.params.id);
        list.save();
      }


      let response = [];
      for (let i = 0; i < list.contents.length; i++) {
        let c = await Content.findById(list.contents[i]);
        response.push(c);
      }
      res.status(200).json(response);
    } catch (error) {
      res.status(500).json(error);
    }
  })
);

export default userRouter;
