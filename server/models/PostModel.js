import mongoose from "mongoose";

const PostSchema = new mongoose.Schema({
    title: {
        type: String,
        required: false,
        //trim: true,
        min: 3,
        max: 50
    },
    // photo : {
    //     type: Buffer,
    //     contentType : String


    // },

    author: {
        type: String,
        required: true,
        //trim: true,
        lowercase: true,
        min: 3,
        max: 20
    },
    body: {
        type: String,
        min: 5,
        //trim: true,
        required: true,
        max: 2000
    },

    comments: [{
        body: {
            type: String,
            max: 140
        },

        author: String,
        //trim: true,
        date: {
            type: Date,
            default: new Date()
        }
    }]
})


const Post = mongoose.model("Post", PostSchema);

export default Post;