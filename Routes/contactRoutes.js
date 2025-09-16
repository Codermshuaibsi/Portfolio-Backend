// contactRoute.js (example Express.js route)
const express = require("express");
const { Email } = require("../Controllers/contactControllers");
const   router = express.Router();


router.post("/contact",Email);

module.exports = router;
