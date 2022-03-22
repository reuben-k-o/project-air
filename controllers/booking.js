const Booking = require("../models/booking");

exports.getBooking = async (req, res, next) => {
  try {
    const booking = await Booking.find();
    res
      .status(200)
      .json({ message: "Fetched booking successfully from database", booking });
  } catch (err) {
    console.log(err);
  }
};

exports.postBooking = async (req, res, next) => {
  const { name, airline, from, to, departing, returning, passengerAndCabin } =
    req.body;
  const booking = new Booking({
    name,
    airline,
    from,
    to,
    departing,
    returning,
    passengerAndCabin,
  });
  try {
    const result = await booking.save();
    console.log(result);
    res.status(200).json({ message: "Booking successful", booking });
  } catch (err) {
    console.log(err);
  }
};

exports.updateBooking = async (req, res, next) => {
  const bookingId = req.params.bookingId;

  const { name, airline, from, to, departing, returning, passengerAndCabin } =
    req.body;
  try {
    const booking = await Booking.findById(bookingId);

    if (!booking) {
      console.log("No booking found!");
    }
    (booking.name = name),
      (booking.airline = airline),
      (booking.from = from),
      (booking.to = to),
      (booking.departing = departing),
      (booking.returning = returning),
      (booking.passengerAndCabin = passengerAndCabin);

    const resave = await booking.save();
    res
      .status(201)
      .json({ message: "Booking updated successfully", booking: resave });
  } catch (err) {
    console.log(err);
  }
};
