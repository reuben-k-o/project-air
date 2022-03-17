const express = require("express");
const bodyParser = require("body-parser");
const bookingRoutes = require("./routes/booking");

const app = express();

app.use(bodyParser.json());

app.use("/booking", bookingRoutes);

app.listen(8000);
