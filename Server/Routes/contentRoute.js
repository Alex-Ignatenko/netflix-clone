import express from "express";
import expressAsyncHandler  from "express-async-handler";
import Content from "../Models/ContentModel.js";
import { isAuth } from "../Services/authService.js";

const contentRouter = express.Router();

contentRouter.get('/',isAuth,expressAsyncHandler(async (req, res) => {
      try {
        const data = await Content.find();
        res.status(200).json(data.reverse());
      } catch (error) {
        res.status(500).json(error);
      }
    })
  );

//get
contentRouter.get('/get/:id',isAuth,expressAsyncHandler(async (req, res) => {
      try {
        const content = await Content.findById(req.params.id);
        res.status(200).json(content);
      } catch (error) {
        res.status(500).json(error);
      }
    })
);

//get random content
contentRouter.get('/random',isAuth,expressAsyncHandler(async (req, res) => {
      const type = req.query.type;
      let content;
      try {
        if (type === 'series') {
          content = await Content.aggregate([
            { $match: { isSeries: true } },
            { $sample: { size: 1 } },
          ]);
        } else if (type === 'movies') {
          content = await Content.aggregate([
            { $match: { isSeries: false } },
            { $sample: { size: 1 } },
          ]);
        } else {
          content = await Content.aggregate([{ $sample: { size: 1 } }]);
        }
        res.status(200).json(content[0]);
      } catch (error) {
        res.status(500).json(error);
      }
    })
  );
export default contentRouter;