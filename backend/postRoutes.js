const express = require("express");
const router = express.Router();
const postController = require('./postController');;

router.get('/', postController.getAllPosts);
router.post("/post", postController.createPost);


router.patch("/post/:id", postController.ratioSystem);


module.exports = router;