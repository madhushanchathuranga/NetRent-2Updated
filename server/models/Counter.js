const mongoose = require("mongoose");

const counterSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true }, // e.g., "agentLicenseNumber"
  value: { type: Number, required: true }, // Last used number
});

const Counter = mongoose.model("Counter", counterSchema);

module.exports = Counter;
