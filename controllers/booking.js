const Booking = require("../models/booking");

exports.getBooking = (req, res, next) => {
  res.status(200).json({
    name: "Reuben",
    airline: "Kenya Airways",
    from: "Mombasa",
    to: "Nairobi",
    departing: "20-03-2022",
    returning: "30-03-2022",
    passengerAndCabin: "2 Pass Bussiness",
  });
};

exports.postBooking = (req, res, next) => {
  const { name, airline, from, to, departing, returning, passengerAndCabin } =
    req.body;
  res
    .status(200)
    .json({ name, airline, from, returning, to, departing, passengerAndCabin });
};
