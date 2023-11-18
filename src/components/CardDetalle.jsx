import { useContext } from 'react';
import { PizzaContext } from "../context/PizzaProvider";
import { Card, CardBody, Typography, Button } from "@material-tailwind/react";

const CardDetalle = ({ pizzaId }) => {
    const { pizza, addToCart } = useContext(PizzaContext);
    const pizzaDetalle = pizza.find(p => p.id === pizzaId);

    if (!pizzaDetalle) {
        return <div>Pizza no encontrada</div>;
    }

    return (
        <Card className='mt-4'>
            <div className="flex">
                <img src={pizzaDetalle.img} alt={pizzaDetalle.name} />
                <CardBody>
                    <Typography variant="h2" color="blue-gray">{pizzaDetalle.name}</Typography>
                    <Typography variant="h4" color="blue-gray">{pizzaDetalle.desc}</Typography>
                    <Typography variant="h4" color="blue-gray" className='mt-4'>Ingredientes: </Typography>
                    <ul className='mt-2'>
                        {pizzaDetalle.ingredients.map((ingrediente, index) => (
                            <li key={index}>🍕{ingrediente}</li>
                        ))}
                    </ul>
                    <div className='flex justify-start space-x-12 mt-4'>
    <Typography variant="h2" color="blue-gray">${pizzaDetalle.price}</Typography>
    <Button color="red" onClick={() => addToCart(pizzaDetalle)}>🛒 Añadir al carrito</Button>
</div>
                    
                </CardBody>
            </div>
        </Card>
    );
}

export default CardDetalle;