import mongoose from "mongoose";

const userSchema = new mongoose.Schema ({
    username: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    }
}, {timestamps: true})
// each user is going to have too extra envormation
// the time of creating & the time of edit mongo db outomatically added that

const User = mongoose.model('user',userSchema);

export default User;