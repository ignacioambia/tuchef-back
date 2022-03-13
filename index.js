const express = require("express");
const mongoose = require("mongoose");
const config = require("config");

const app = express();

require("./startup/prod")(app);

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Credentials", true);
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,OPTIONS");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin,X-Requested-With,Content-Type,Accept,content-type,application/json"
  );
  next();
});
app.use(express.json());

mongoose
  .connect(config.get("tuchef-db"))
  .then(() => {
    console.log("Connection to DB was successfully done");
  })
  .catch((e) => console.error("Could not connect to db", e));

const dishes = require("./routes/dishes");
app.use("/dishes", dishes);

app.get("/", (req, res) => {
  res.send("Hello world");
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(
    "Listening on port",
    port,
    process.env.NODE_ENV,
    config.get("tuchef-db")
  );
});
