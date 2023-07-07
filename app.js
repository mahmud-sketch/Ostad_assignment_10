const express = require("express");
const router = require("./Src/Routes/api");
const app = new express();
const bodyParser = require("body-parser");

// security middleware
const rateLimit = require("express-rate-limit");
const helmet = require("helmet");
const mongoSanitize = require("express-mongo-sanitize");
const xssClean = require("xss-clean");
const hpp = require("hpp");
const cors = require("cors");
const mongoose = require("mongoose");

// use security middleware
app.use(helmet());
app.use(mongoSanitize());
app.use(xssClean());
app.use(hpp());
app.use(cors());
app.use(bodyParser.json());

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
});

app.use(limiter);

//mongodb connecton
let URI = "mongodb://127.0.0.1:27017/products";
let OPTION = { user: "", pass: "" };

mongoose
  .connect(URI, OPTION)
  .then((res) => {
    console.log("database success");
  })
  .catch((err) => {
    console.log(err);
  });

//defined route
app.use("/api/v1", router);

//udefined route
app.use("*", (req, res) => {
  res.status(404).json({ status: "failed", data: "not found" });
});

module.exports = app;
