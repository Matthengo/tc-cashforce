import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import OrderContext from './OrderContext';

import apiCalls from '../api/apiCalls';
function OrderProvider({ children }) {
  const [user, setUser] = useState({});
  const [orders, setOrders] = useState([])

  useEffect(() => {
    const asyncCallback = async () => {
      const userFetch = await apiCalls.getUserById(1); // User "login" simulation
      const ordersFetch = await apiCalls.getAllOrdersByUserId(userFetch.data.id);
      setUser(userFetch.data)
      setOrders(ordersFetch.data);
    }

    asyncCallback();
  }, [])

  const contextValues = {
    orders,
    user,
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
