const express = require("express");
const multer = require('multer');

const storage = multer.memoryStorage(); 
const upload = multer({ storage: storage });

const router = express.Router();
const { RateUserAdd, DeleteRateUser, UpdateRateUser, GetRateUser, rateUser, getRateUsers, addNewRateUser } = require("../controllers/RateController") ;

router.post("/addRateUser", upload.single('Image'), RateUserAdd);
router.post("/addNewRateUser", addNewRateUser);

router.delete ("/deleteRateUser/:id",DeleteRateUser);
router.put("/UpdateRateUser", UpdateRateUser);
router.put("/rateUser", rateUser);
router.get("/getRateUsers", getRateUsers);
router.get ("/getRateUser/:id",GetRateUser);
module.exports = router;
