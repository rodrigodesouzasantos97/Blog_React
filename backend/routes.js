const express = require("express");

const router = express.Router();

const {
  createPost,
  getPosts,
  getPost,
  deletePost,
} = require("./controllers/PostController");

router.post("/", (req, res) => createPost(req, res));

router.get("/", (req, res) => getPosts(req, res));

router.get("/:id", (req, res) => getPost(req, res));

router.delete("/:id", (req, res) => deletePost(req, res));

module.exports = router;
