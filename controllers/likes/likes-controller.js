//import React from 'react';
import * as likesDao from './likes-dao.js'
import * as booksDao from './books-dao.js';
// import { useParams } from "r"

const LikesController = (app) => {
    const userLikesAuthor = async (req, res) => {
        const userId = req.params.uid;
        const authorName = req.params.authorName;
        const like = await likesDao.userLikesAuthor(userId, authorName);
        console.log(like);
        res.json(like);
    }
    const userLikesNovel = async (req, res) => {
        const userId = req.params.uid;
        const novelId = req.params.nid;
        const like = await likesDao.userLikesAuthor(userId, novelId);
        console.log(like);
        res.json(like);
    }
    app.post("/api/users/:uid/likes/author/:authorName", userLikesAuthor);
    app.post("/api/users/:uid/likes/novel/:nid", userLikesAuthor);
}

export default LikesController;