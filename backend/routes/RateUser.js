const express = require("express");
const router = express.Router();
const { RateUserAdd, DeleteRateUser, UpdateRateUser, GetRateUser, rateUser } = require("../controllers/RateController") ;

router.post("/addRateUser", RateUserAdd);
router.delete ("/deleteRateUser/:id",DeleteRateUser);
router.put("/UpdateRateUser/:id", UpdateRateUser);
router.put("/rateUser", rateUser);
router.get ("/getRateUser/:id",GetRateUser);
module.exports = router;
