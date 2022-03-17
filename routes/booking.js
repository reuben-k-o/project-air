const express = require("express");
const bookingController = require("../controllers/booking");

const router = express.Router();

router.get("/", bookingController.getBooking);

router.post("/", bookingController.postBooking);

module.exports = router;
