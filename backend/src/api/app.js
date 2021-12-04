const express = require('express');
const cors = require('cors');
const orderRouter = require('../routers/orderRouter')

const app = express();

app.use(cors());
app.use('/order', orderRouter);

module.exports = app;