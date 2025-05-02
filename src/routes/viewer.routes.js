const express = require("express");
const router = express.Router();

const viewerController = require("../controllers/viewer.controller");

router.post("/create", viewerController.createViewer);

module.exports = router;