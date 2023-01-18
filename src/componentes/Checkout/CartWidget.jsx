import React from "react";
import 'boxicons'


const CartWidget = () => {
	// const cartCheckUp = cart.length === 0 ? "numberCart--Disable" : "numberCart--Active";
    // <p className={cartCheckUp}>{cart.length === 0 ? "" : totalUnidades()}</p> 

	return (
		<div className="icon d-flex cartContainer">
            <box-icon classname="icon3" name='cart'></box-icon>
            <p>1</p>
		</div>
	);
};

export default CartWidget;