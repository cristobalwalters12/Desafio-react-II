import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { PizzaContext } from "../context/PizzaProvider";

const NavBarPizza = () => {
    const { total } = useContext(PizzaContext);

    return (
        <nav className="flex items-center justify-between p-6 bg-blue-500">
            <div className="text-white">
                <Link to="/" className="text-2xl font-bold pl-12">🍕 Pizzeria Mamma Mia!</Link>
            </div>
            <div>
                <Link to="/carrito" className="text-white text-2xl pr-12">🛒 Carrito (${total})</Link>
            </div>
        </nav>
    );
}

export default NavBarPizza;