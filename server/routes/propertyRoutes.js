const express = require("express");
const {
  createProperty,
  getAllProperties,
  getPropertyByLicense,
} = require("../controllers/propertyController.js");

const router = express.Router();

router.post("/register", createProperty);
router.get("/", getAllProperties);
router.get("/:licenseNo", getPropertyByLicense);

module.exports = router;
