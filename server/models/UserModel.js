import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({

    username: {
        type: String,
        min: 3,
        max: 20
    }
    ,
    mode: {
        type: String // admin, user, moderator
    }
    ,
    password: {
        type: String,
        min: 6,
        max: 16,
        hide: true
    }
})

export default User = mongoose.model('User', UserSchema);

