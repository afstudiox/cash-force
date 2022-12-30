const express = require('express');
const userRoute = require('./routes/userRoute');
const orderRoute = require('./routes/orderRoute');

const app = express();

app.use(express.json());

app.use('/users', userRoute);
app.use('/orders', orderRoute);


module.exports = app;
