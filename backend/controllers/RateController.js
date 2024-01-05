const RateuserModel = require("../models/RateModel");

const RateUserAdd = async (req, res) => {
    const { firstName, lastName, Job, Description,Rate } = req.body;
    try {

        if (
           
            !firstName ||
            !lastName ||
            !Job ||
            !Description ||
            !Rate 
          
        
        ) {
            throw Error("All fields must be filled");
        }
        
        const Rateuser = new RateuserModel({
            firstName, lastName, Job, Description,Rate
            
        });

        await Rateuser.save();

        res.status(200).json({  Rateuser });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};



module.exports = {
    RateUserAdd,
}
