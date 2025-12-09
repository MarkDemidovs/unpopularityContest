const express = require("express");
const cors = require("cors");
const postRoutes = require('./postRoutes');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/posts', postRoutes);

module.exports = app;