const express = require("express");
const periodController = require("./period.controller");

const router = express.Router();

router.get("/", periodController.getPeriods);
router.get("/:slug", periodController.getPeriodBySlug);

module.exports = router;
