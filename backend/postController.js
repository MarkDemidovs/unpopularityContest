const { get } = require('./app');
const postModel = require('./postModel');

const getAllPosts = async (req, res) => {
    try {
        const posts = await postModel.getAllPosts();
        res.json({ posts })
    } catch (err) {
        res.status(500).json({ error: 'Failed to fetch posts: ' + err.message});
    }
};

const createPost = async (req, res) => {
    const { content } = req.body;

    if (!content) return res.status(400).json({error: "Missing content field!"});

    try {
        const newPost = await postModel.createAPost({ content });
        res.status(201).json({post: newPost});
    } catch (err) {
        res.status(500).json({error: "Failed to create a post: " + err.message});
    }
}


module.exports = {
    getAllPosts,
    createPost
};