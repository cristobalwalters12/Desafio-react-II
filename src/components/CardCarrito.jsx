import { useContext } from 'react';
import { PizzaContext } from "../context/PizzaProvider";
import { Card, CardHeader, CardBody, CardFooter, Typography } from "@material-tailwind/react";

const CardCarrito = () => {
    const { cart, total } = useContext(PizzaContext);

    const groupedPizzas = cart.reduce((acc, pizzaItem) => {
        if (!acc[pizzaItem.name]) {
            acc[pizzaItem.name] = { count: 0, total: 0 };
        }
        acc[pizzaItem.name].count += 1;
        acc[pizzaItem.name].total += pizzaItem.price;
        return acc;
    }, {});

    return (
        <div className='mt-4'>  
            <Card>
                <CardHeader color="blue-gray">
                    <Typography variant="h2" color="white">Carrito</Typography>
                </CardHeader>
                <CardBody>
                    {Object.entries(groupedPizzas).map(([pizzaName, pizzaData], index) => (
                        <div key={index} className="flex justify-between items-center">
                            <Typography variant="h3" color="blue-gray">Pizza: {pizzaName}</Typography>
                            <Typography variant="h4" color="blue-gray">Cantidad:x{pizzaData.count} Total: ${pizzaData.total}</Typography>
                        </div>
                    ))}
                </CardBody>
                <CardFooter>
                    <Typography variant="h3" color="blue-gray">Total a pagar: ${total}</Typography>
                </CardFooter>
            </Card>
        </div>
    )
}
export default CardCarrito;