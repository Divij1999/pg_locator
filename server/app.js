const express = require("express");
const app = express();

const pool = require("./db");

const logger = require("morgan");

const cors = require("cors");

const college_router = require("./routes/college_routes");

app.use(logger("dev"));
app.use(cors());
app.use(express.json());

app.use("/", college_router);

module.exports = app;
