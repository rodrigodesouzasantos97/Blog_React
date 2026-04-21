const express = require("express");

const router = express.Router();

const { createPost } = require("./controllers/PostController");

router.post("/", (req, res) => createPost(req, res));

module.exports = router;
