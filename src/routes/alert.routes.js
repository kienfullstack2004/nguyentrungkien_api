const express = require("express");
const router = express.Router();

const alertController = require("../controllers/alert.controller");

router.post("/create", alertController.createAlert);
router.get("/getAllAlert", alertController.getAllService);
router.delete("/delete/:id", alertController.deleteBanner);

module.exports = router;