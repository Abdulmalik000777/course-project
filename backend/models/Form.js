// backend/models/Form.js
const { DataTypes } = require("sequelize");
const sequelize = require("../database");

const Form = sequelize.define("Form", {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
  },
});

module.exports = Form;
