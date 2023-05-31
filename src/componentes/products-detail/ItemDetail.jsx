import { useContext  } from "react";
import { CartContext } from "../Context/CartContext";
import Contador from "../products-detail/Contador"

export default function ItemDetail({productoElegido}) {
const { addToCart, cantidadDeProducto } = useContext(CartContext);

const onAdd = (qty) => {
		addToCart(productoElegido, qty);
	};

    const cantidad = productoElegido ? cantidadDeProducto(productoElegido.id) : 1;

  return (
    <div className="detail container">
        <div className="left image-container d-flex">
            <div className="main">
            <img src={productoElegido ? `${productoElegido.url}` : ""} alt=""/>
            </div>
        </div>

        <div className="right">
            <span>Home/T-shirt</span>
            <h2>{productoElegido ? productoElegido.title: ""}</h2>
            <p className="price">${productoElegido ? productoElegido.price :"" }</p>
            <h3 className="titleDetail">Product detail</h3>
            <p className="description">{productoElegido ? productoElegido.description : ""}</p>
            <Contador onAdd={onAdd} initial={cantidad}/>
        </div>
    </div>
  )
}
