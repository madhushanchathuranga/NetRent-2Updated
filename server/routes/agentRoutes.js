const express = require("express");
const {
  createAgent,
  getAgentById,
  getAllAgents,
} = require("../controllers/agentController");

const router = express.Router();

router.post("/register", createAgent); // Create an agent
router.get("/", getAllAgents); // Get all agents
router.get("/:licenseNumber", getAgentById); // Get agent by license number

module.exports = router;
