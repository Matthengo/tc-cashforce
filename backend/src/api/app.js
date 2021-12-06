const express = require('express');
const cors = require('cors');
const orderRouter = require('../routers/orderRouter')
const userRouter = require('../routers/userRouter')

const app = express();

app.use(cors());
app.use('/order', orderRouter);
app.use('/user', userRouter);

module.exports = app;