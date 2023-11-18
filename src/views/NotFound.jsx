import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import image from "../assets/images/404.svg";  
import{Link} from "react-router-dom";
const NotFound = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <Card className="w-full max-w-2xl">
   
          <img src={image} alt="" />
    
        <CardBody>
          <Typography variant="h5" color="blue-gray" className="mb-2">
            Página no encontrada
          </Typography>
          <Typography>
            Lo siento, la página que estás buscando no existe.
          </Typography>
        </CardBody>
        <CardFooter className="pt-0">
          <Link to="/">
            <Button color="blue">Regresar al inicio</Button>
          </Link>
        </CardFooter>
      </Card>
    </div>
  );
};

export default NotFound;