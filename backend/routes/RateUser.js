const express = require("express");
const multer = require('multer');

const storage = multer.memoryStorage(); 
const upload = multer({ storage: storage });

const router = express.Router();
const { DeleteRateUser, UpdateRateUser, GetRateUser, rateUser, getRateUsers, addNewRateUser ,updateUser} = require("../controllers/RateController") ;

router.post("/addNewRateUser", addNewRateUser);

router.delete ("/deleteRateUser/:id",DeleteRateUser);
router.put("/UpdateRateUser", UpdateRateUser);
router.put("/rateUser", rateUser);
router.put("/updateUser/:id", updateUser);
router.get("/getRateUsers", getRateUsers);
router.get ("/getRateUser/:id",GetRateUser);
module.exports = router;
