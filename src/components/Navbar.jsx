import React, { useContext } from 'react';
import { Button, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Navbar.css'; 
import { CartContext } from '../context/CartContext'; 
import { useUser } from '../context/UserContext'; 

const Navbar = () => {
  const { getTotal, getQuantity } = useContext(CartContext);
  const { token, logout } = useUser(); 

  const total = getTotal();
  const quantity = getQuantity();

  return (
    <Nav className="navbar">
      <div className="d-flex align-items-center">
        <span className="navbar-title">Pizzería Mamma Mía!</span>
        <div className="nav-buttons d-flex">
          {/* Siempre tiene que quedar visible junto con el total */}
          <Link to="/">
            <Button variant="outline-light" className="mx-2">
              🍕 Home
            </Button>
          </Link>
          
          {token ? (
            <>
              <Link to="/profile">
                <Button variant="outline-light" className="mx-2">
                  Profile
                </Button>
              </Link>
              <Button 
                variant="outline-light" 
                className="mx-2"
                onClick={logout} 
              >
                Logout
              </Button>
            </>
          ) : (
            <>
              <Link to="/login">
                <Button variant="outline-light" className="mx-2">
                  🔒 Login
                </Button>
              </Link>
              <Link to="/register">
                <Button variant="outline-light" className="mx-2">
                  🔒 Register
                </Button>
              </Link>
            </>
          )}
        </div>
      </div>
      <Link to="/cart">
        <Button variant="outline-light" className="total-button">
          🛒 {quantity} Items - ${total}
        </Button>
      </Link>
    </Nav>
  );
};

export default Navbar;










