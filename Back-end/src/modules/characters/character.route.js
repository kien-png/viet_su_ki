const express = require("express");
const characterController = require("./character.controller");

const router = express.Router();

router.get("/", characterController.getCharacters);
router.get("/:slug", characterController.getCharacterBySlug);

module.exports = router;
