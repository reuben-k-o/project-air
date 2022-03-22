const express = require("express");
const bodyParser = require("body-parser");
const bookingRoutes = require("./routes/booking");
const mongoose = require("mongoose");
const { MONGODB_URI } = require("./config");

const app = express();

app.use(bodyParser.json());

app.use("/booking", bookingRoutes);

mongoose.connect(MONGODB_URI, () => {
  app.listen(8000);
});
