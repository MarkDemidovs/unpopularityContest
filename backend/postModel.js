const db = require("./db");

const getAllPosts = async() => {
    const result = await db.query("SELECT * FROM posts");
    return result.rows;
}

const createAPost = async({content}) => {
    const result = await db.query("INSERT INTO posts (content) VALUES ($1) RETURNING *", [content])
    return result.rows[0];
}

module.exports = {
    getAllPosts,
    createAPost
}