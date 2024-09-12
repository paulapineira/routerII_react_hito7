import axios from 'axios';
import { createContext, useEffect, useState } from 'react';

export const PizzaContext = createContext();

const PizzaProvider = ({ children }) => {
  const [pizzas, setPizzas] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/pizzas');
        console.log('Pizzas from API:', response.data); /*ocupe esto para verificar los datos que trae la API porque no me estaba trayendo nada*/
        setPizzas(response.data);
      } catch (error) {
        console.error('Error fetching pizzas:', error);
      }
    })();
  }, []);

  return (
    <PizzaContext.Provider value={{ pizzas }}>
      {children}
    </PizzaContext.Provider>
  );
};

export default PizzaProvider;




