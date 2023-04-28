import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import session from 'express-session';

import BooksController from './controllers/novels/novels-controller.js';
import UsersController from './controllers/users/users-controllers.js';
import LikesController from './controllers/likes/likes-controller.js';
import FollowsController from './controllers/follows/follows-controller.js';
import SessionController from './session-controller.js'

mongoose.connect("mongodb://127.0.0.1:27017/finalProject");

const app = express();
app.use(cors(
    {
        credentials: true,
        origin: 'http://localhost:3030',
    }
));
app.use(express.json());
app.use(
    session({
        secret: "process.env.SECRET",
        resave: false,
        // if depolying in the cloud, secure should have the value of TRUE
        cookie: { secure: false }
    })
);

FollowsController(app);
BooksController(app);
LikesController(app);
UsersController(app);
FollowsController(app);
SessionController(app);

app.listen(4000);