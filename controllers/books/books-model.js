import mongoose from 'mongoose';
import booksSchema from './books-schema.js'
const booksModel = mongoose.model("novels", booksSchema);
export default booksModel;