import express from "express";
import expressAsyncHandler from "express-async-handler";

const indexRouter = express.Router();


indexRouter.get("/",expressAsyncHandler(async (req, res) => {
    res.send("api is running...");
}));

export default indexRouter;