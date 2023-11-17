
import { Route, Routes } from 'react-router-dom';
import NavBarPizza from './components/NavbarPizza'; 
import Detalle from './views/Detalle';
import Home from './views/Home';
import Carrito from './views/Carrito';
import NotFound from './views/NotFound';

import './App.css';
function App() {
  return (
    <div>
        <NavBarPizza />
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detalle/:id" element={<Detalle />} />
        <Route path="/carrito" element={<Carrito />} />
        <Route path="*" element={<NotFound />} />
        </Routes>
    </div>
  );
}

export default App;
