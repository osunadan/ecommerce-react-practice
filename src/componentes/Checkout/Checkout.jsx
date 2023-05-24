import {React, useContext} from 'react';
import { CartContext } from "../../componentes/Context/CartContext";

function Checkout() {
const {numeroDeOrden} = useContext(CartContext);

  return (
    <section className="carritoVacioContainer section d-flex">
        <div className=" row container">
		<h3 className="mensajeCarritoVacio">
		Gracias por tu compra, el ID de tu producto es {numeroDeOrden}</h3>
        </div>
    </section >
  )
}

export default Checkout