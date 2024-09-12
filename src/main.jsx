import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom';
import PizzaProvider from './context/PizzaContext.jsx';
import CartProvider from './context/CartContext.jsx';
import { UserProvider } from './context/UserContext.jsx';


ReactDOM.createRoot(document.getElementById('root')).render(
  <UserProvider>
    <PizzaProvider>
      <CartProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </CartProvider>
    </PizzaProvider>
  </UserProvider>
)

