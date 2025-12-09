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


module.exports = {
    getAllPosts
};