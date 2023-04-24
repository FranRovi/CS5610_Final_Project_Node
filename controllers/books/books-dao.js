import booksModel from './books-model.js'

export const userLikesNovel = async (userId, novelId) => {
    return booksModel.create({ userId, novelId });
}