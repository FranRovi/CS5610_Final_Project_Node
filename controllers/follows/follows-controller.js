import * as followsDao from '../follows/follows-dao.js';

const FollowsController = (app) => {
    const userFollowsUser = async (req, res) => {
        const follower = req.params.follower;
        const followed = req.params.followed;
        let follow = await followsDao.findFollowsByFollowerAndFollowed(follower, followed);
        if (follow) {
            res.sendStatus(400);
            return;
        }
        follow = await followsDao.userFollowsUser(follower, followed);
        res.json(follow);
    }

    const unfollowUser = async (req, res) => {
        const follower = req.params.follower;
        const followed = req.params.followed;
        const follows = await followsDao.unfollowUser(follower, followed);
        res.json(follows);
    }

    const findFollowsByFollewedId = async (req, res) => {
        const followed = req.params.followed;
        const follows = await followsDao.findFollowsByFollewedId(followed);
    }

    const findFollowsByFollewerId = async (req, res) => {
        const followed = req.params.followed;
        const follows = await followsDao.findFollowsByFollewedId(followed);
    }

    app.post('/api/users/:follower/follows/:followed', userFollowsUser);
    app.delete('/api/users/:follower/follows/:follower', unfollowUser);
    app.get('/api/users/:followed/followers', findFollowsByFollewedId);
    app.get('/api/users/:follower/followees', findFollowsByFollewerId);
}

export default FollowsController;