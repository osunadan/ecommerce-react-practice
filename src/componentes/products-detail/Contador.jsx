import { useState } from "react";

export default function Contador({initial=1, onAdd}) {
const [cantidad, setCantidad] = useState(initial);

const sumar = () => {
	if (cantidad) {
			setCantidad(cantidad + 1);
	}
	};

const restar = () => {
	if (cantidad > 1) {
			setCantidad(cantidad - 1);
	}
	};

const agregar = () => {
	onAdd(cantidad);
	};

  return (
    <div className="contadorContainer">
	<div className="top d-flex">
        <button className="contadorItem" href="#" onClick={sumar}>+</button>
		<p className="contadorItem">{cantidad}</p>
	    <button className="contadorItem" onClick={restar}>-</button>
    </div>
    <div className="bottom">
		<button onClick={agregar} className="botonAgregar btn">Agregar al carrito</button>
	</div>
    </div>
  )
}
