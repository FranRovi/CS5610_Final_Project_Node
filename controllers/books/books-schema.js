import mongoose from 'mongoose';

const booksSchema = new mongoose.Schema({
    userId: String,
    novelId: String,
}, {collection: "novels"});

export default booksSchema;