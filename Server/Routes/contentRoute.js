import express from "express";
import expressAsyncHandler  from "express-async-handler";
import Content from "../Models/ContentModel.js";
import { isAuth } from "../Services/authService.js";

const contentRouter = express.Router();

contentRouter.get('/',isAuth,expressAsyncHandler(async (req, res) => {

    const data = await Content.find();
    res.status(200).json(data.reverse());

  })
);

//get
contentRouter.get('/get/:id',isAuth,expressAsyncHandler(async (req, res) => {

        const content = await Content.findById(req.params.id);
        res.status(200).json(content);
  })
);

//get a list ???? content
contentRouter.get('/getlist',isAuth,expressAsyncHandler(async (req, res) => {
  const type = req.query.type;
  const genre = req.query.genre;
  let contentList = [];

    if (type === 'tvshows') {
      if (genre){
        contentList = await Content.aggregate([
          { $match: { isSeries: true , genre: genre } },{ $sample: { size: 12 } }]);
      } else {
        contentList = await Content.aggregate([
          { $match: { isSeries: true  } },{ $sample: { size: 12 } }]);
      }
    } else if (type === 'movies') {
            if (genre){
              contentList = await Content.aggregate([
                { $match: { isSeries: false, genre: genre } },{ $sample: { size: 12 } },]);
            }else{
              contentList = await Content.aggregate([
                { $match: { isSeries: false } },{ $sample: { size: 12 } },]);
            }
    } else {
      if (genre){
        contentList = await Content.aggregate([
          { $match: { genre: genre } },{ $sample: { size: 12 } },]);
        }else
          contentList = await Content.aggregate([{ $sample: { size: 25 } }]);
    }
    res.status(200).json(contentList);

})
);

//get random content
contentRouter.get('/random',isAuth,expressAsyncHandler(async (req, res) => {
      const type = req.query.type;
      let content;

        if (type === 'tvshows') {
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

  })
);


export default contentRouter;

// const newList = await Content.aggregate([{ $match: { isSeries: isSeries } },{ $sample: { size: 8 } },]);