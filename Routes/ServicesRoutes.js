const express = require("express");

const {
  handleCreateServices,
  handleDeleteServices,
  handleUpdateServices,
  handleGetServices,
} = require("../Controllers/ServicesController");

const router = express.Router();

//  ROUTES
router.post("/create", handleCreateServices);    // Create Service
router.get("/all", handleGetServices);           // Get All Services
router.put("/update", handleUpdateServices);     // Update Service
router.delete("/delete", handleDeleteServices);  // Delete Service

module.exports = router;
