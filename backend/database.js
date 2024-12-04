const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("course_project_db", "root", "abdulmalik99", {
  host: "localhost",
  dialect: "mysql",
  port: 3306,
  logging: false,
});

module.exports = sequelize;
