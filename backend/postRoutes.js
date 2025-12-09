const express = require("express");
const router = express.Router();
const postController = require('./postController');;

router.get('/', postController.getAllPosts);


module.exports = router;