const express = require("express");
const router = express.Router();
const homeController = require("../controllers/home_controller");

router.get("/", homeController.home);
router.use("/users", require("./users"));
router.use("/students", require('./student'));
router.use("/results", require('./results'));
module.exports = router;