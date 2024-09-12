import React, { useContext } from 'react';
import Header from '../components/Header';
import CardPizza from '../components/CardPizza';
import { Row, Col } from 'react-bootstrap';
import { PizzaContext } from '../context/PizzaContext';

const Home = () => {
  const { pizzas } = useContext(PizzaContext);

  if (!pizzas.length) return <p className="text-center my-4">Cargando pizzas...</p>;

  return (
    <div className="homecontainer">
      <Header />
      <h1 className="text-center my-4">Lista de Pizzas</h1>
      <Row>
        {pizzas.map(pizza => (
          <Col key={pizza.id} xs={12} sm={6} md={4} lg={4} className="mb-4">
            <CardPizza pizza={pizza} />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Home;









