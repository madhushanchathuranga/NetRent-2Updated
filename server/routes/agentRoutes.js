const express = require("express");
const multer = require("multer");
const {
  createAgent,
  getAgentById,
  getAllAgents,
  getAgentsByPostalCode,
  updateAgent,
} = require("../controllers/agentController");

const router = express.Router();

// ✅ Configure Multer Storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/"); // Save files in 'uploads' folder
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({ storage: storage });

router.post("/register", upload.single("agentImage"), createAgent);
router.get("/", getAllAgents); // Get all agents
router.get("/:licenseNumber", getAgentById); // Get agent by license number
router.put("/update/:licenseNumber", upload.single("agentImage"), updateAgent); // ✅ Update agent with image upload

router.get("/search/:postalCode", getAgentsByPostalCode); // Search agent by postal code

module.exports = router;
