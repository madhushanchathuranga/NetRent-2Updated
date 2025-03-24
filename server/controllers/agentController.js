const Agent = require("../models/Agent"); // Import Agent model
const generateLicenseNumber = require("../utils/generateLicenseNumber"); // Import function to generate license number

const createAgent = async (req, res) => {
  try {
    console.log("Received Data:", req.body); // ✅ Log incoming request body
    console.log("Uploaded File:", req.file); // ✅ Log uploaded file

    const {
      email,
      name,
      password,
      phoneNumber,
      postalCode,
      aboutMe,
      facebook,
      instagram,
      linkedin,
      youtube,
      tiktok,
      serviceProposal,
      marketingProposal,
    } = req.body;

    const agentImage = req.file ? `/uploads/${req.file.filename}` : null;

    // ✅ Check if the agent already exists
    const existingAgent = await Agent.findOne({ email });
    if (existingAgent) {
      return res
        .status(400)
        .json({ message: "Agent with this email already exists." });
    }

    // ✅ Generate unique license number
    const licenseNumber = await generateLicenseNumber();

    // ✅ Create new agent
    const newAgent = new Agent({
      licenseNumber,
      name,
      email,
      password,
      phoneNumber,
      postalCode,
      aboutMe,
      facebook,
      instagram,
      linkedin,
      youtube,
      tiktok,
      serviceProposal,
      marketingProposal,
      agentImage,
    });

    await newAgent.save(); // ✅ Save to database

    res
      .status(201)
      .json({ message: "Agent created successfully!", agent: newAgent });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error creating agent", error: error.message });
  }
};

// ✅ Get All Agents
const getAllAgents = async (req, res) => {
  try {
    const agents = await Agent.find(); // Fetch all agents from the database
    res.status(200).json(agents);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error fetching agents", error: error.message });
  }
};

// ✅ Get Single Agent by ID
const getAgentById = async (req, res) => {
  try {
    const agent = await Agent.findOne({
      licenseNumber: req.params.licenseNumber,
    });

    if (!agent) {
      return res.status(404).json({ message: "Agent not found" });
    }

    res.status(200).json(agent);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error fetching agent", error: error.message });
  }
};

// Function to search agents by postal code
const getAgentsByPostalCode = async (req, res) => {
  try {
    const { postalCode } = req.params;
    const agents = await Agent.find({ postalCode: postalCode });
    if (agents.length === 0) {
      return res.status(404).json({ message: "No agents found for this postal code" });
    }
    res.status(200).json(agents);
  } catch (error) {
    res.status(500).json({ message: "Error fetching agents by postal code", error });
  }
};

module.exports = { createAgent, getAllAgents, getAgentById, getAgentsByPostalCode };
