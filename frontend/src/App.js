import React from 'react'
import OrderProvider from './context/OrderProvider'
import HomePage from './pages/HomePage'

function App() {
  return (
    <OrderProvider>
      <HomePage />
    </OrderProvider>
    
  )
}

export default App

