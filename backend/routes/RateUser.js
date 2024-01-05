const express = require("express");
const router = express.Router();
const { RateUserAdd } = require("../controllers/RateController") ;

router.post("/addRateUser", RateUserAdd);

module.exports = router;
