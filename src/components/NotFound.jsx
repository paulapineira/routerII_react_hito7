import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css';

const NotFound = () => {
  return (
    <div className="not-found-container">
      <h1 className="not-found-title">¡Oh no, 404!</h1>
      <img src="https://random.dog/1186-4923-20498.jpg" alt="Página no encontrada" className="not-found-image"/>
      <p className="not-found-message">Parece que esta pizza se ha quemado en el horno.</p>
      <p> ¡Vuelve a nuestra página principal haciendo click en el bóton de abajo y encuentra toda nuestras opciones de Pizzas!
      </p>
      <Link to="/" className="not-found-link">
        Regresa a la página principal
      </Link>
    </div>
  );
};

export default NotFound;
