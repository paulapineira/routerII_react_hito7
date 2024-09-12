import React, { useContext } from 'react';
import { Card, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { CartContext } from '../context/CartContext';
import { Link } from 'react-router-dom';

const CardPizza = ({ pizza }) => {
  const { id, name, description, ingredients, price, img } = pizza;
  const { addToCart, cart } = useContext(CartContext);

  const ingredientsText = ingredients.join(', ');

  const isInCart = cart.some(item => item.id === id);

  const handleAddToCart = () => {
    addToCart({ id, name, description, ingredients, price, img });
  };

  return (
    <Card className="pizza-card">
      <Card.Img variant="top" src={img} />
      <Card.Body>
        <Card.Title className="card-title">{name}</Card.Title>
        <hr className="divider" />
        <Card.Text className="description-text">{description}</Card.Text>
        <Card.Text className="ingredients-text">{ingredientsText}</Card.Text>
        <hr className="divider" />
        <Card.Text className="price-text">Precio: ${price.toLocaleString()}</Card.Text>
        <div className="d-flex justify-content-between align-items-center mt-3">
         {/*  <Button variant="light">Ver Más</Button> */}
         <Link to={`/pizza/${id}`} style={{ textDecoration: 'none' }}>
            <Button variant="light">Ver Más</Button>
          </Link>
          <Button 
            variant={"dark"} onClick={handleAddToCart}>{'Añadir 🛒'}
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default CardPizza;








