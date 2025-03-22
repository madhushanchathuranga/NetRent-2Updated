const express = require("express");
const { createAgent, getAgentById } = require("../controllers/agentController"); // ✅ Import agent function

const router = express.Router();

router.post("/register", createAgent); // ✅ Route for creating an agent

// ✅ Get a Single Agent by ID
router.get("/:licenseNumber", getAgentById);

module.exports = router;
