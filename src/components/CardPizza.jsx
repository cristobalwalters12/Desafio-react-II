import { Link } from "react-router-dom";
import { useContext } from 'react';
import { PizzaContext } from "../context/PizzaProvider";
import { Card, CardHeader, CardBody, CardFooter, Typography, Button } from "@material-tailwind/react";

const CardPizza = () => {
  const { pizza, addToCart } = useContext(PizzaContext);

  return (
    <>
    {pizza.map((pizzaItem) => (
      <Card key={pizzaItem.id} className="mt-6 w-96">
        <CardHeader color="blue-gray">
          <img src={pizzaItem.img} alt={pizzaItem.name} />
        </CardHeader>
        <CardBody>
          <Typography variant="h2" color="blue-gray" className="mb-2">
            {pizzaItem.name}
          </Typography>
          <Typography>
            <Typography variant="h6" className="mb-4">
              Ingredientes:
              <span className="mx-4 flex-shrink text-gray-400"></span>
              <div className="flex-grow border-t border-gray-400"></div>
            </Typography>
            <ul>
              {pizzaItem.ingredients.map((ingrediente, index) => (
                <li key={index} className="text-center">🍕{ingrediente}</li>
              ))}
            </ul>
          </Typography>
          <Typography variant="h3" color="blue-gray" className="mb-2 mt-5 text-center">
            ${pizzaItem.price}
          </Typography>
        </CardBody>
        <CardFooter className="pt-0 space-x-4">
          <Link to={`/Detalle/${pizzaItem.id}`}><Button color="blue">👀 Ver más</Button></Link>
          <Button color="red" onClick={() => addToCart(pizzaItem)}>🛒 Añadir al carrito</Button>
        </CardFooter>
      </Card>
    ))}
    </>
  );
};

export default CardPizza;