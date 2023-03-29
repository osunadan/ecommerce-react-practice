import {useState, useEffect} from 'react'
import useProducts from '../../customHooks/useProducts';
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";

export default function ItemDetailContainer() {
    const [item, setItem] = useState([]);
	const { detalleid } = useParams();
    const productos = useProducts();

useEffect(() => {
  const idProducto = Number(detalleid);
    const productoFiltrado = productos.filter((prod) => { 
       return prod.id === idProducto});
   setItem(productoFiltrado);
}, [detalleid, productos])


  return (
        <section className="section product-detail">
                <ItemDetail productoElegido={item ? item : "Loading"}/>
        </section>
  )
};
