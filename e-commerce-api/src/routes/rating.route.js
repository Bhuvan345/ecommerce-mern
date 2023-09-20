const express = require("express");
const router = express.Router();

const ratingController = require("../controller/rating.controller.js");
const authenticate = require("../middleware/authenticate.js");

// Corrected the route definition for PUT
router.put("/product/:productId", authenticate, ratingController.getAllRating);

// Add a callback function for the POST route
router.post("/create", authenticate, ratingController.createRating);

module.exports = router;
