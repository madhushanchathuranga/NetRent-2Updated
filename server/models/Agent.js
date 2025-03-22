const mongoose = require("mongoose");

const agentSchema = new mongoose.Schema(
  {
    licenseNumber: { type: String, unique: true },
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    phoneNumber: { type: String, required: true },
    aboutMe: { type: String },
    facebook: { type: String },
    instagram: { type: String },
    linkedin: { type: String },
    youtube: { type: String },
    tiktok: { type: String },
    serviceProposal: { type: String },
    marketingProposal: { type: String },
  },
  { timestamps: true }
);

const Agent = mongoose.model("Agent", agentSchema);

module.exports = Agent;
