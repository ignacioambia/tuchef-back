const express =  require('express');
const Dish = require("../schemas/DishSchema");
const route = express.Router();

route.get("/", async (req, res) => {
  const allCourses = await Dish.find();
  res.send(allCourses);
});

route.get("/:id", async (req, res) => {
  const course = await Dish.findById(req.params.id);
  res.send(course);
});

route.post("/", (req, res) => {
  console.log("req.body is: ", req.body);
  const createdDish = new Dish(req.body);

  const yolo = createdDish.save().then((savedDish) => {
    console.log("yolo: ", savedDish);
    res.send(savedDish);
  });
});


module.exports = route;

