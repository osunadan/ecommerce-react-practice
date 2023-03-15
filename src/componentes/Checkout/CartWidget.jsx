import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../Context/CartContext";
import 'boxicons';

const CartWidget = () => {
    const { cart, totalUnidades } = useContext(CartContext);

	return (
	<Link to={"/carrito"}>
        <div className="icon d-flex cartContainer">
            <box-icon classname="icon3" name='cart'></box-icon>
            <p>1</p>
		</div>
      </Link>
	);
};

export default CartWidget;