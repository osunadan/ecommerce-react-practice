import {createContext, useState} from "react"; 

export const CartContext = createContext();

const Provider = (props) => {
    const [cart, setCart] = useState([]);

    return(
		<CartContext.Provider value={cart}>
            {props.children}
        </CartContext.Provider>
	)
}

export default Provider;