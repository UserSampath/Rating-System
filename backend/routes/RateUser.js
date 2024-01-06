const express = require("express");
const multer = require('multer');

const storage = multer.memoryStorage(); // Store image in memory
const upload = multer({ storage: storage });

const router = express.Router();
const { RateUserAdd ,DeleteRateUser,UpdateRateUser, GetRateUser} = require("../controllers/RateController") ;

router.post("/addRateUser", upload.single('Image'), RateUserAdd);
router.delete ("/deleteRateUser/:id",DeleteRateUser);
router.put ("/UpdateRateUser/:id",UpdateRateUser);
router.get ("/getRateUser/:id",GetRateUser);
module.exports = router;
