import mongoose from "mongoose";
const usersSchema = new mongoose.Schema({
    firstname: String,
    lastname: String,
    username: {type: String, unique: true, required: true},
    email: {type: String, unique: true, required: true},
    // email: {type: String, unique: true},
    password: {type: String, required: true},
    profilePic: {type: String, default: "../../images/web_dev_profile_na.png"},
    // favoriteGenre: {type: String, default: "NONE", enum: ["MYSTERY", "SUSPENSE", "ROMANCE", "HISTORY", "NONE"]},
    favoriteGenre: {type: String, default: "None"},
    role: {type: String, default: "USER", enum: ["USER", "ADMIN", "GUEST"]},
}, { collection: 'users'});

export default usersSchema;
