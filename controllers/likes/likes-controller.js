import * as likesDao from './likes-dao.js';

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
        const like = await likesDao.userLikesNovel(userId, novelId);
        console.log(like);
        res.json(like);
    }

    const findLikesByUserId = async (req, res) => {
        const userId = req.params.uid;
        const likes = await likesDao.findLikesByUserId(userId);
        res.json(likes);
    }
    app.post("/api/users/:uid/likes/authors/:authorName", userLikesAuthor);
    app.post("/api/users/:uid/likes/novels/:nid", userLikesNovel);
    app.get("/api/users/:uid/likes");
}

export default LikesController;