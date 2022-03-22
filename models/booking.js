const { Schema, model } = require("mongoose");

const bookingSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  airline: {
    type: String,
    required: true,
  },
  to: {
    type: String,
    required: true,
  },
  from: {
    type: String,
    required: true,
  },
  departing: {
    type: Date,
    required: true,
  },
  returning: {
    type: Date,
    required: true,
  },
  passengerAndCabin: {
    type: String,
    required: true,
  },
});

module.exports = model("Booking", bookingSchema);
