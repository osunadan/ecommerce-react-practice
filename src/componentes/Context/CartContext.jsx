import {createContext, useState} from "react"; 
import {products} from "../../mock/products.json"

export const CartContext = createContext();

const Provider = (props) => {
    const productos = Array.from(products)
    const [cart, setCart] = useState([productos]);


    console.log(cart)
    return(
		<CartContext.Provider value={cart}>
            {props.children}
        </CartContext.Provider>
	)
}

export default Provider;