import { useContext  } from "react";
import { CartContext } from "../Context/CartContext";
import Contador from "../products-detail/Contador"

export default function ItemDetail({productoElegido}) {
   console.log(productoElegido[0].title);
const { addToCart } = useContext(CartContext);

const onAdd = (qty) => {
		addToCart(productoEleguido, qty);
	};

  return (
    <div className="detail container">
        <div className="left image-container">
            <div className="main">
            <img id="zoom" src="" alt=""/>
            </div>
        </div>

        <div className="right">
            <span>Home/T-shirt</span>
            <h2></h2>
            <div className="price"></div>
            <Contador onAdd={onAdd} />
        </div>
    </div>
  )
}
