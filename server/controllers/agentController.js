const Agent = require("../models/Agent"); // Import Agent model

const createAgent = async (req, res) => {
  try {
    const {
      licenseNumber,
      email,
      phoneNumber,
      aboutMe,
      facebook,
      instagram,
      linkedin,
      youtube,
      tiktok,
      serviceProposal,
      marketingProposal,
    } = req.body;

    // ✅ Check if the agent already exists
    const existingAgent = await Agent.findOne({ email });
    if (existingAgent) {
      return res
        .status(400)
        .json({ message: "Agent with this email already exists." });
    }

    // ✅ Create new agent
    const newAgent = new Agent({
      licenseNumber,
      email,
      phoneNumber,
      aboutMe,
      facebook,
      instagram,
      linkedin,
      youtube,
      tiktok,
      serviceProposal,
      marketingProposal,
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

module.exports = { createAgent, getAgentById };
