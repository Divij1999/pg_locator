const express = require("express");
const app = express();

const pool = require("./db");

const logger = require("morgan");

const cors = require("cors");

const college_router = require("./routes/college_routes");
const pg_router = require("./routes/pg_routes");

app.use(logger("dev"));
app.use(cors());
app.use(express.json());

app.use("/colleges", college_router);
app.use("/pg", pg_router);

module.exports = app;
