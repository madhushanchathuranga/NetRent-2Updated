const Counter = require("../models/Counter");

const generateLicenseNumber = async () => {
  try {
    const counter = await Counter.findOneAndUpdate(
      { name: "agentLicenseNumber" }, // Find the counter document
      { $inc: { value: 1 } }, // Increment the value by 1
      { new: true, upsert: true } // Create if doesn't exist
    );

    return `AGT-${counter.value}`; // Generate License Number (AGT-1, AGT-2, ...)
  } catch (error) {
    console.error("Error generating license number:", error);
    throw new Error("Failed to generate license number");
  }
};

module.exports = generateLicenseNumber;
