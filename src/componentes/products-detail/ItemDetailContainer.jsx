import {useState, useEffect} from 'react'
import useProducts from '../../customHooks/useProducts';
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";

export default function ItemDetailContainer() {
    const [item, setItem] = useState({});
	const { detalleid } = useParams();
    const [productos, productosFiltrados] = useProducts();

useEffect(() => {
const idProducto = Number(detalleid);
const productoFiltrado = productos.find((prod) => { 
    return prod.id === idProducto});
    setItem(productoFiltrado);
}, [productos])

if(productos === []){
   return(<div className="container">Loading</div>)
}
console.log(item)
  return (
        <section className="section product-detail">
                <ItemDetail productoElegido={item}/>
        </section>
  )
};
