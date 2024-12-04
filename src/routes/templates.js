// backend/routes/templates.js
const express = require("express");
const router = express.Router();
const { Template } = require("../models");

// Example route to fetch templates
router.get("/", async (req, res) => {
  try {
    const templates = await Template.findAll();
    res.json(templates);
  } catch (error) {
    console.error("Error fetching templates:", error);
    res.status(500).send("Server Error");
  }
});

module.exports = router;
