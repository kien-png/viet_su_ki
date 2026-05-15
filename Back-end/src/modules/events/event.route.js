const express = require("express");
const eventController = require("./event.controller");

const router = express.Router();

router.get("/", eventController.getEvents);
router.get("/:slug", eventController.getEventBySlug);

module.exports = router;
