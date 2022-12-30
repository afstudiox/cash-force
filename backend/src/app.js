const express = require('express');
const cors = require('cors');
const orderRoute = require('./routes/orderRoute');

const app = express();
app.use(cors());

app.use(express.json());


app.use('/orders', orderRoute);


module.exports = app;
