import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './Pizza.css'; 

const Pizza = () => {
  const { id } = useParams();
  const [pizza, setPizza] = useState(null);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    const fetchPizza = async () => {
      try {
        const response = await fetch(`http://localhost:5000/api/pizzas/${id}`);
        if (!response.ok) {
          throw new Error('Error al hacer fetch en la pizza');
        }
        const data = await response.json();
        setPizza(data);
      } catch (error) {
        console.error('Error de fetch en la pizza:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchPizza();
  }, [id]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (!pizza) {
    return <p>No se encontró la pizza que esta buscando.</p>;
  }

  return (
    <div className="pizza-singular">
      <img src={pizza.img} alt={pizza.name} className="pizza-img" />
      <div className="pizza-info">
        <h1 className="pizza-name">{pizza.name}</h1>
        <p className="pizza-desc">{pizza.desc}</p>
        <p className="pizza-ingredients">Ingredientes: {pizza.ingredients.join(', ')}</p>
        <p className="pizza-price">${pizza.price}</p>
        <button className="add-to-cart-button" onClick={() => alert('La pizza ha sido añadida al carrito')}>
        Añadir 🛒
        </button>
      </div>
    </div>
  );
};

export default Pizza;








