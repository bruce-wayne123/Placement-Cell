const express = require("express");
const router = express.Router();
const interviewController = require("../controllers/interview_controller");
router.get("/getInterview", interviewController.interview);
router.get("/externalJobs", interviewController.getExternalJobs);
router.get('/:id', interviewController.interviewDetails);
router.get("/addInterview", interviewController.addInterview);
router.post("/create", interviewController.create);
module.exports = router;