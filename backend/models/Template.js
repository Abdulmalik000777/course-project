// backend/models/Template.js
const { DataTypes } = require("sequelize");
const sequelize = require("../database");

const Template = sequelize.define("Template", {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
  },
});

module.exports = Template;
