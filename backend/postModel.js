const db = require("./db");

const getAllPosts = async() => {
    const result = await db.query("SELECT * FROM posts");
    return result.rows;
}


module.exports = {
    getAllPosts
}