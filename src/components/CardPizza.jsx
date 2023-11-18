import { Link } from "react-router-dom";
import { useContext } from 'react';
import { PizzaContext } from "../context/PizzaProvider";
import { Card, CardHeader, CardBody, CardFooter, Typography, Button } from "@material-tailwind/react";

const CardPizza = () => {
  const { pizza, addToCart } = useContext(PizzaContext);

  return (
    <>
      {pizza.map((pizzaItem) => (
        <Card key={pizzaItem.id} className="mt-6 w-full sm:w-96 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">
          <CardHeader color="blue-gray">
            <img src={pizzaItem.img} alt={pizzaItem.name} />
          </CardHeader>
          <CardBody>
            <Typography variant="h2" color="blue-gray" className="mb-2">
              {pizzaItem.name}
            </Typography>

            {/* Separación del encabezado de los ingredientes y la lista */}
            <Typography variant="h6" className="mb-4">
              Ingredientes:
            </Typography>
            <ul>
              {pizzaItem.ingredients.map((ingrediente, index) => (
                <li key={index} className="text-center">🍕{ingrediente}</li>
              ))}
            </ul>

            <Typography variant="h3" color="blue-gray" className="mb-2 mt-5 text-center">
              ${pizzaItem.price}
            </Typography>
          </CardBody>
          <CardFooter className="pt-0 space-x-4">
            <Link to={`/detalle/${pizzaItem.id}`}><Button color="blue">👀 Ver más</Button></Link>
            <Button color="red" onClick={() => addToCart(pizzaItem)}>🛒 Añadir al carrito</Button>
          </CardFooter>
        </Card>
      ))}
    </>
  );
};

export default CardPizza;