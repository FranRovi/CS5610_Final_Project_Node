import mongoose from 'mongoose';

const likesSchema = new mongoose.Schema({
    userId: String,
    // author: String,
    novelId: String,
}, {collection: "likes"});

export default likesSchema;