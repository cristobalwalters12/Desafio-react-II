import { useParams } from 'react-router-dom';
import CardDetalle from "../components/CardDetalle";


function Detalle() {
  const { id } = useParams();
  console.log(id)
  return (
    <div>
      <CardDetalle pizzaId={id} />
    </div>
  );
}

export default Detalle;
