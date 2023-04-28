import likesModel from './likes-model.js'

export const userLikesAuthor = async (userId, authorName) => {
    return likesModel.create({ userId,  authorName });
}

export const userLikesNovel = async (userId, novelId) => {
    return likesModel.create({ userId,  novelId });
}

export const findLikeBuUserId = async (userId) => {
    return likesModel.find({ userId });
}
