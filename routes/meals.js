const express =  require('express');
const route = express.Router();

const meals = [
 {
  name: 'Arroz con papas',
  description: 'Este es arroz con papas',
  ingredients: [] 
 },
 {
  name: 'Pollo a la naranja',
  description: 'Este es pollo a a naranja',
  ingredients: [] 
 },
 {
  name: 'Pulpos marinados',
  description: 'Este es pulpos marinados',
  ingredients: [] 
 },
]


route.get('/', (req, res)=>{
 res.send(meals);
});


module.exports = route;

