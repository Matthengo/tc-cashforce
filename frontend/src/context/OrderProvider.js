import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import OrderContext from './OrderContext';

import apiCalls from '../api/apiCalls';
function OrderProvider({ children }) {
  const [orders, setOrders] = useState([])

  useEffect(() => {
    const asyncCallback = async () => {
      const result = await apiCalls.getAllOrdersByUserId(1);
      setOrders(result.data);
    }

    asyncCallback();
  }, [])

  const contextValues = {
    orders,
  }

  return (
    <OrderContext.Provider value={ contextValues }>
      { children }
    </OrderContext.Provider>
  );
}

OrderProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default OrderProvider;
