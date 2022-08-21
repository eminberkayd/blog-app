import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import bodyParser from "body-parser";

import postRoutes from "./routes/PostRoutes.js"

dotenv.config()

const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true, limit: '30mb' }))
app.use(bodyParser.json({ limit: '30mb', extended: true }))
app.use('/posts', postRoutes);

app.get('/', (req, res) => {
    res.redirect('/posts')
})

const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.MONGO_URI)
    .then(app.listen(process.env.PORT, () => console.log("Database connection established and Server is listening..")))
    .catch(error => {
        console.log("error on database connection: ", error.message)
    })



