const express = require("express");
const router = express.Router();
const postController = require('./postController');;

router.get('/', postController.getAllPosts);
router.post("/post", postController.createPost);


module.exports = router;