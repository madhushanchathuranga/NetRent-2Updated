const mongoose = require("mongoose");

const agentSchema = new mongoose.Schema(
  {
    licenseNumber: { type: String, unique: true },
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    phoneNumber: { type: String, required: true },
    postalCode: { type: String, required: true },
    aboutMe: { type: String },
    facebook: { type: String },
    instagram: { type: String },
    linkedin: { type: String },
    youtube: { type: String },
    tiktok: { type: String },
    serviceProposal: { type: String },
    marketingProposal: { type: String },
    agentImage: { type: String },
    selectedProperties: { type: Number, default: 0 },
    rentedProperties: { type: Number, default: 0 },
    views: { type: Number, default: 0 },
    soldProperties: { type: Number, default: 0 },
    rating: { type: Number, default: 0 },
  },
  { timestamps: true }
);

const Agent = mongoose.model("Agent", agentSchema);

module.exports = Agent;
