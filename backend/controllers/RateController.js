const RateuserModel = require("../models/RateModel");



const RateUserAdd = async (req, res) => {
    const { firstName, lastName, Job, Description, } = req.body;

    try {
        const imageBuffer = req.file.buffer;
        const imageBase64 = imageBuffer.toString('base64');

        const Rateuser = new RateuserModel({
            firstName,
            lastName,
            Job,
            Description,
            Image: imageBase64,
        });

        await Rateuser.save();

        res.status(200).json({ message: 'User  submitted successfully!', Rateuser });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};




const DeleteRateUser = async (req, res) => {
    const userId = req.params.id;

    try {
        const deletedRateUser = await RateuserModel.findByIdAndDelete(userId);

        if (!deletedRateUser) {
            throw Error("UserRate not found");
        }

        res.status(200).json({ message: "RateUser deleted successfully", deletedRateUser });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const UpdateRateUser = async (req, res) => {
    const { Rate, userId } = req.body;

    try {
        const updatedRateUser = await RateuserModel.findByIdAndUpdate(
            userId,
            { $push: { Rate: Rate } },
            { new: true, runValidators: true }
        );

        if (!updatedRateUser) {
            throw Error("User not found");
        }

        res.status(200).json({ message: "User updated successfully", updatedRateUser });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};


const GetRateUser = async (req, res) => {
    const userId = req.params.id;
    try {
        const rateUser = await RateuserModel.findById(userId);

        if (!rateUser) {
            throw Error("User not found");
        }

        res.status(200).json({ rateUser });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// new
const rateUser = async (req, res) => {
    const { Rate, id } = req.body;

    try {
        const updatedRateUser = await RateuserModel.findByIdAndUpdate(
            id,
            { $push: { Rate: Rate } },
            { new: true }
            
        );

        if (!updatedRateUser) {
            throw Error("User not found");
        }

        res.status(200).json({ message: "User updated successfully",Rate:updatedRateUser.Rate});
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};
const getRateUsers = async (req, res) => {
    try {
        const rateUsers = await RateuserModel.find();
        res.status(200).json(rateUsers);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    RateUserAdd,
    DeleteRateUser,
    UpdateRateUser,
    GetRateUser,
    rateUser,
    getRateUsers
}
