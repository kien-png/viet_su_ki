const express = require("express");
const locationController = require("./location.controller");

const router = express.Router();

router.get("/", locationController.getLocations);
router.get("/:slug", locationController.getLocationBySlug);

module.exports = router;
