import * as novelsDao from './novels-dao.js';

const BooksController = (app) => {
    // app.get('/books', (req, res) => {
    //     res.send("Final Project Web Dev!")
    // })
    const createNovel = async (req,res) => {
        const novel = req.body;
        const newNovel = await novelsDao.createNovel()
    }

    app.post("/api/users/:uid/likes/novels/:nid", createNovel);

}

export default BooksController;