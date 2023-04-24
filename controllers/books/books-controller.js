const BooksController = (app) => {
    app.get('/books', (req, res) => {
        res.send("Final Project Web Dev!")
    })
}

export default BooksController;