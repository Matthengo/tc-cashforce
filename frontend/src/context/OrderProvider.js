import React from 'react';
import PropTypes from 'prop-types';
import OrderContext from './OrderContext';

function OrderProvider({ children }) {
  
  const contextValues = {

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
