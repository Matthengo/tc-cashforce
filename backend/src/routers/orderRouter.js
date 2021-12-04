const express = require('express');

const { getAllOrdersByUserId } = require('../controllers/orderControllers');

const router = express.Router();

router
  .get('/user/:id', getAllOrdersByUserId);

module.exports = router;
