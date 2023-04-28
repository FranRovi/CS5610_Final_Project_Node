import followsModel from "./follows-model.js";

export const userFollowsUser = async (follower, followed) => {
    return await followsModel.create({ follower, followed})
}

export const findFollowsByFollewerId = async (follower) => {
    return await followsModel
    .find({follower})
    .populate('followed', 'username')
    .exec();
}

export const findFollowsByFollewedId = async (followed) => {
    return await followsModel
    .find({followed})
    .populate('followed', 'username')
    .exec();
}

export const unfollowUser = async (follower, followed) => {
    return await followsModel.deleteOne({follower, followed});
}

export const findFollowsByFollowerAndFollowed = async (follower, followed) => {
    return await followsModel.findOne({ follower, followed });
}