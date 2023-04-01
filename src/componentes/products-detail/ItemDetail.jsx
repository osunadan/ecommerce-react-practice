import { useContext  } from "react";
import { CartContext } from "../Context/CartContext";
import Contador from "../products-detail/Contador"

export default function ItemDetail({productoElegido}) {
const { addToCart } = useContext(CartContext);
console.log(productoElegido)
const onAdd = (qty) => {
		addToCart(productoElegido, qty);
	};

  return (
    <div className="detail container">
        <div className="left image-container">
            <div className="main">
            <img id="zoom" src={productoElegido ? `${productoElegido.url}` : ""} alt=""/>
            </div>
        </div>

        <div className="right">
            <span>Home/T-shirt</span>
            <h2>{productoElegido ? productoElegido.title: ""}</h2>
            <div className="price">${productoElegido ? productoElegido.price :"" }</div>
            <Contador onAdd={onAdd} />
        </div>
    </div>
  )
}
