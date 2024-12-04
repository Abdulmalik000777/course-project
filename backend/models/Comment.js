// backend/models/Comment.js
const { DataTypes } = require("sequelize");
const sequelize = require("../database");

const Comment = sequelize.define("Comment", {
  content: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
});

module.exports = Comment;
