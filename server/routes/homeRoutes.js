import express from "express";

import { getPosts, getSinglePost, createPost, updatePost, deletePost } from "../controllers/PostController.js";

const router = express.Router();

router.get("/home", getHomePage);
router.get("/explore", getHomePage);
router.get("/notifications", getHomePage);
router.get("/messages", getHomePage);


export default router;