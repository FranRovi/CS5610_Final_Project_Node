import booksModel from './novels-model.js'

// export const userLikesNovel = async (userId, novelId) => {
//     return booksModel.create({ userId, novelId });
// }

export const createNovel = (novel) => {
    return booksModel.create(novel);
}