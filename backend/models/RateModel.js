const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const RateUserSchema = new Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    Job: {
      type: String,
      required: true,
    },
    Description: {
      type: String,
      required: true,
    },
    Rate: {
      type: String,
    },
    Image: {
      type: Buffer, // Change the type to Buffer for image storage
      required: true,
    },
  },
  {
    timestamps: true, // Optional: include timestamps
  }
);

module.exports = mongoose.model('RateUser', RateUserSchema);
