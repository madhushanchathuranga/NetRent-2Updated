const mongoose = require("mongoose");

const propertySchema = new mongoose.Schema(
  {
    licenseNo: { type: String, unique: true }, // Unique property identifier (license number)
    title: { type: String, required: true }, // Title of the property
    location: { type: String, required: true }, // Location of the property
    category: { type: String, required: true }, // Type of property (e.g., residential, commercial)
    description: { type: String }, // Description of the property
    bedrooms: { type: Number, required: true }, // Number of bedrooms
    bathrooms: { type: Number, required: true }, // Number of bathrooms
    garageSpaces: { type: Number, required: true }, // Number of garage spaces
    landSize: { type: String, required: true }, // Size of the land (e.g., in square meters or acres)
    features: [String], // Array of features (e.g., pool, garden, etc.)
    propertyImages: [String], // Array of image URLs for the property

    // Agent details
    agent: {
      name: { type: String }, // Name of the agent
      licenseNumber: { type: String }, // License number of the agent
      phoneNumber: { type: String }, // Phone number of the agent
      email: { type: String }, // Email of the agent
      rating: { type: Number, default: 0 }, // Agent's rating
      reviewCount: { type: Number, default: 0 }, // Number of reviews
      profileImage: { type: String }, // URL of the agent's profile image
      verified: { type: Boolean, default: false }, // Whether the agent is verified
    },
  },
  { timestamps: true } // Automatically manage createdAt and updatedAt
);

const Property = mongoose.model("Property", propertySchema);

module.exports = Property;
