const express = require("express");
const router = express.Router();
const { RateUserAdd, DeleteRateUser, UpdateRateUser, GetRateUser } = require("../controllers/RateController") ;

router.post("/addRateUser", RateUserAdd);
router.delete ("/deleteRateUser/:id",DeleteRateUser);
router.put("/UpdateRateUser/:id", UpdateRateUser);

router.get ("/getRateUser/:id",GetRateUser);
module.exports = router;
