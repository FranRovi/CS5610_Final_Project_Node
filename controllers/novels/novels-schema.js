import mongoose from 'mongoose';

const novelsSchema = new mongoose.Schema({
    userId: String,
    novelId: String,
    novelName: String,
}, {collection: "novels"});

export default novelsSchema;