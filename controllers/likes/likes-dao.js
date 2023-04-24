import likesModel from './likes-model.js'

export const userLikesAuthor = async (userId, authorName) => {
    return likesModel.create({ userId,  authorName });
}
