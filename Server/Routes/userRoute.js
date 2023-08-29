import  express  from "express";
import expressAsyncHandler  from "express-async-handler";
import bcrypt from "bcryptjs";
import User from "../Models/UserModel.js";
import { generateToken, isAuth } from "../Services/authService.js";
import List from "../Models/ListModel.js";

const userRouter = express.Router();

userRouter.post('/signin', expressAsyncHandler(async (req, res) => {
    const user = await User.findOne({ email: req.body.email });
    console.log(user);
    if (user && await bcrypt.compare(req.body.password, user.password)) {
        res.send({ _id: user._id, username: user.username, email: user.email, token: generateToken(user) })
        return;
    }
    res.status(401).send({ message: 'Invalid Credentials' });
}))

userRouter.post("/signup" , expressAsyncHandler(async (req, res) => {
    const newUser = new User({ username: req.body.username, email: req.body.email, password: bcrypt.hashSync(req.body.password) });
    new List({ name: newUser.username + "`s List",contents: []}).save();
    const user = await newUser.save();
    res.send({ _id: user._id, username: user.username, email: user.email, token: generateToken(user) })
}))

userRouter.get('/getuserlist',isAuth,expressAsyncHandler(async (req, res) => {
    try {
      const data = await List.findOne({name:req.body.name});
      res.status(200).json(data.contents);
    } catch (error) {
      res.status(500).json(error);
    }
  })
);

userRouter.get('/isinuserlist:id',isAuth,expressAsyncHandler(async (req, res) => {
    try {
      const data = await List.contents.exists({_id:req.body._id});
      res.status(200).json(data);
    } catch (error) {
      res.status(500).json(error);
    }
  })
);

userRouter.put('/updateuserlist:id',isAuth,expressAsyncHandler(async (req, res) => {
    try {
        const list = await List.findOneAndUpdate({name:req.body.name}, {contents: req.body.contents.map(c => c._id)}, {
            new: true
        });
        res.status(200).json(list);
    } catch (error) {
      res.status(500).json(error);
    }
  })
);

export default userRouter;