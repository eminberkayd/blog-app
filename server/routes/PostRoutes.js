import express from "express";

import { getPosts, getSinglePost, createPost, updatePost, deletePost } from "../controllers/PostController.js";

const router = express.Router();

router.get("/", getPosts);
router.get("/:id", getSinglePost);
router.post("/", createPost);
router.patch("/:id", updatePost);
router.delete("/:id", deletePost);


export default router;