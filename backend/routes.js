const express = require("express");

const router = express.Router();

const { createPost, getPosts } = require("./controllers/PostController");

router.post("/", (req, res) => createPost(req, res));

router.get("/", (req, res) => getPosts(req, res));

module.exports = router;
