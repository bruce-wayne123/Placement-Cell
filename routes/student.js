const express = require("express");
const router = express.Router();
const passport = require("passport");
const session = require("express-session");
const studentsController = require("../controllers/students_controller");
router.get("/getStudents",studentsController.getStudents);
router.get("/addstudent", studentsController.addStudent);
router.post("/create", studentsController.create);
module.exports = router;