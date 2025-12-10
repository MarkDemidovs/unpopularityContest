const db = require("./db");

const getAllPosts = async() => {
    const result = await db.query("SELECT * FROM posts");
    return result.rows;
}

const createAPost = async({content}) => {
    const result = await db.query("INSERT INTO posts (content) VALUES ($1) RETURNING *", [content])
    return result.rows[0];
}

const ratioSystem = async (id, voteType) => {
    const result = await db.query("UPDATE posts SET ratio = ratio + $1 WHERE id = $2 RETURNING *", [voteType, id]);
    return result.rows[0];
}

module.exports = {
    getAllPosts,
    createAPost,
    ratioSystem
}