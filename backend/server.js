const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;

const sequelize = require("./database");
const { User, Template, Form, Comment, Like } = require("./models/index");
const authRoutes = require("./routes/auth"); // Ensure this matches your filename
const templateRoutes = require("./routes/templates"); // Ensure this matches your filename
const formRoutes = require("./routes/forms"); // Ensure this matches your filename
const commentRoutes = require("./routes/comments"); // Ensure this matches your filename
const likeRoutes = require("./routes/likes"); // Ensure this matches your filename

app.use(express.json());
app.use("/api/auth", authRoutes);
app.use("/api/templates", templateRoutes);
app.use("/api/forms", formRoutes);
app.use("/api/comments", commentRoutes);
app.use("/api/likes", likeRoutes);

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

sequelize
  .sync({ force: true })
  .then(() => {
    console.log("Database synced successfully.");
  })
  .catch((err) => {
    console.error("Error syncing database:", err);
  });
