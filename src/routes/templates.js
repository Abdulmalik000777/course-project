// src/routes/templates.js
const express = require("express");
const router = express.Router();

// Mock data or actual database fetching logic
const templates = [
  { id: 1, title: "Template 1", description: "Description 1" },
  { id: 2, title: "Template 2", description: "Description 2" },
];

// Define the endpoint
router.get("/templates", (req, res) => {
  res.json(templates);
});

module.exports = router;
