const express = require('express');
const cors = require('cors');
const userRoute = require('./routes/userRoute');
const orderRoute = require('./routes/orderRoute');

const app = express();
app.use(cors());

app.use(express.json());

app.use('/users', userRoute);
app.use('/orders', orderRoute);


module.exports = app;
