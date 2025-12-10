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

const ratioSystem = async (req, res) => {
    const { id } = req.params;
    const { voteType } = req.body

    if (!voteType || !id) return res.status(400).json({ error: "Missing voteType or id"});


    try {
        const updatedPost = await postModel.ratioSystem(id, voteType);
        res.status(201).json({ post: updatedPost });
    } catch (err) {
        res.status(500).json({ error: "Failed to process vote: " + err.message });
    }
}

module.exports = {
    getAllPosts,
    createPost,
    ratioSystem
};