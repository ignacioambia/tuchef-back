const express = require('express');
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

const meals = require("./routes/meals");
app.use("/meals", meals);



app.get('/', (req, res)=>{
 res.send('Hello world');
});

const port = process.env.PORT || 3000;

app.listen(port, ()=>{
 console.log('Everything working now');
});