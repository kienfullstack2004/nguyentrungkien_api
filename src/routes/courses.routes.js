const express = require("express");
const router = express.Router();

const coursesController = require("../controllers/courses.controller");

router.post("/create", coursesController.createCourses);
router.get("/getAllCourses", coursesController.getAllCourses);
router.get("/getCourses/:id",coursesController.getOneCourses);
router.post("/update/:id", coursesController.updateCourses);
router.delete("/delete/:id", coursesController.deleteCourses);

module.exports = router;
