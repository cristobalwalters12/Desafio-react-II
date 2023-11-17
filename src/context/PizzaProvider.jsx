import { createContext, useState, useEffect } from 'react';

export const PizzaContext = createContext();

export const PizzaProvider = ({ children }) => {

  const [pizza, setPizza] = useState([]);
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    getPizza();
  }, []);

  const getPizza = async () => {
    const res = await fetch("/pizzas.json");
    const data = await res.json();
    setPizza(data);
  }

  const handleSetPizza = (newPizza) => {
    setPizza(newPizza);
  };

  const addToCart = (pizzaItem) => {
    setCart([...cart, pizzaItem]);
    setTotal(total + pizzaItem.price);
  };

  return (
    <PizzaContext.Provider value={{ pizza, handleSetPizza, cart, addToCart, total }}>
      {children}
    </PizzaContext.Provider>
  );
};

export default PizzaProvider;