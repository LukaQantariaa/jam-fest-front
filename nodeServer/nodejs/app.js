const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
  }));

const loginRoute = require('./routes/login');
const itemRoute = require('./routes/items');
const categoryRoute = require('./routes/category');
const requestRoute = require('./routes/request');
const cycleRoute = require('./routes/find_cycle');
const detectRoute = require('./routes/detect')

app.use('/login', loginRoute );
app.use('/items' , itemRoute);
app.use('/category' , categoryRoute);
app.use('/request' , requestRoute);
app.use('/find_cycle' , cycleRoute );
app.use('/detect' , detectRoute)
app.get('/', (req, res) => {
    res.send("ehi");
})
 
app.listen(3000);
// /login - post (200)