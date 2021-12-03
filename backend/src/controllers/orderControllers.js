const orderServices = require('../services/orderServices');
const {
  STATUS_OK,
  STATUS_SERVER_ERROR
} = require('../utils/statusConstants');

const getAllOrdersByUserId = async (req, res) => {
  try {
    const orders = await orderServices.getAllOrdersByUserId(req.params.id);
    res.status(STATUS_OK).json(orders);
  } catch (error) {
    console.log(error);
    res.status(STATUS_SERVER_ERROR).send('Something went wrong. Please try again.');
  };
};

module.exports = {
  getAllOrdersByUserId,
};
