const express = require('express');
const app = express();

require('./startup/prod')(app)


const meals = require('./routes/meals');
app.use('/meals', meals );


app.get('/', (req, res)=>{
 res.send('Hello world');
});

const port = process.env.PORT || 3000;

app.listen(port, ()=>{
 console.log('Everything working now');
});