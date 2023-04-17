const express = require("express");
const router = express.Router();
const resultsController = require("../controllers/results_controller");
router.get("/:id", resultsController.getResults);
router.post("/submitResult", resultsController.submitResults);
module.exports = router;