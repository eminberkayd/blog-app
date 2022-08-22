import mongoose from "mongoose";

const PostSchema = new mongoose.Schema({
    title: {
        type: String,
        required: false,
        max: 50
    },
    author: {
        type: String,
        required: true,
        lowercase: true,
        min: 3,
        max: 20
    },
    body: {
        type: String,
        required: true,
        max: 2000
    },
    likes: [{
        author: {
            type: String,
        },
        createdAt: {
            type: Date,
            default: new Date()
        }
    }],

    comments: [{
        body: {
            type: String,
            max: 140
        },
        author: String,
        createdAt: {
            type: Date,
            default: new Date()
        }
    }]
}, { timestamps: true })


const Post = mongoose.model("Post", PostSchema);

export default Post;