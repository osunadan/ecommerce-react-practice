import {React, useState, useEffect} from 'react'
import useProducts from '../../customHooks/useProducts';
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";

export default function ItemDetailContainer() {
    const [item, setItem] = useState({});
	const { detalleid } = useParams();
    const productos = useProducts();

useEffect(() => {
  const idProducto = Number(detalleid)
    const productoFiltrado = productos.find((prod) => { 
       return prod.id === idProducto});
   setItem(productoFiltrado);
}, [detalleid, productos])


  return (
        <section className="section detail">
                <ItemDetail title={item ? item.title : "Loading..."} image={item ? item.url : "Loading..."} precio={item ? item.price : "Loading..."}/>
        </section>
  )
};
