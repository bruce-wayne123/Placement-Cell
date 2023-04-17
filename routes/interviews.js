const express = require("express");
const router = express.Router();
const interviewController = require("../controllers/interview_controller");
router.get("/", interviewController.interview);
router.get("/addInterview", interviewController.addInterview);
router.post("/create", interviewController.create);
module.exports = router;