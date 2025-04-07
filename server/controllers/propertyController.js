const Property = require("../models/Property"); // Import Property model

// ✅ Create Property
const createProperty = async (req, res) => {
  try {
    console.log("Received Data:", req.body); // Log incoming request body

    const {
      licenseNo,
      title,
      location,
      category,
      description,
      bedrooms,
      bathrooms,
      garageSpaces,
      landSize,
      features,
      propertyImages,
      agent, // Accept agent info here
    } = req.body;

    // Create a new property object
    const newProperty = new Property({
      licenseNo,
      title,
      location,
      category,
      description,
      bedrooms,
      bathrooms,
      garageSpaces,
      landSize,
      features,
      propertyImages,
      agent, // Add agent info to the property
    });

    await newProperty.save(); // Save the property to the database

    res.status(201).json({
      message: "Property created successfully!",
      property: newProperty,
    });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error creating property", error: error.message });
  }
};

// ✅ Get All Properties
const getAllProperties = async (req, res) => {
  try {
    const properties = await Property.find(); // Fetch all properties from the database
    res.status(200).json(properties);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error fetching properties", error: error.message });
  }
};

// ✅ Get Property by License No
const getPropertyByLicense = async (req, res) => {
  try {
    const property = await Property.findOne({
      licenseNo: req.params.licenseNo,
    });
    if (!property) {
      return res.status(404).json({ message: "Property not found" });
    }

    res.status(200).json(property);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error fetching property", error: error.message });
  }
};

// ✅ Update Property by License No
const updateProperty = async (req, res) => {
  try {
    const { licenseNo } = req.params;

    // Find property by license number
    let property = await Property.findOne({ licenseNo });
    if (!property) {
      return res.status(404).json({ message: "Property not found" });
    }

    // Update property details
    const updatedData = { ...req.body };

    // Update property document
    property = await Property.findOneAndUpdate({ licenseNo }, updatedData, {
      new: true, // Return updated document
      runValidators: true, // Ensure validation
    });

    res
      .status(200)
      .json({ message: "Property updated successfully!", property });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error updating property", error: error.message });
  }
};

module.exports = {
  createProperty,
  getAllProperties,
  getPropertyByLicense,
  updateProperty,
};
