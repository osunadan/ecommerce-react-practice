import {useState, useEffect, useContext} from 'react'
// import useProducts from '../../customHooks/useProducts';
import useProductsFb from "../../customHooks/useProductsFb"
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import {doc, getDoc, getDocs} from "firebase/firestore";


export default function ItemDetailContainer() {
    const [item, setItem] = useState({});
	const { detalleid } = useParams();
    // const [productos, productosFiltrados] = useProducts();
    const [productosFb, ProductoFbFiltrados, collectionProducts] = useProductsFb();
    

useEffect(() => {
// const idProducto = Number(detalleid);
// const productoFiltrado = productos.find((prod) => { 
//   return prod.id === idProducto});
//    setItem(productoFiltrado);

getDoc(doc(collectionProducts, detalleid))
    .then((res)=>{
        setItem({
            id: res.id,
            ...res.data()
        })
    })
    .catch((error)=>{console.log("No se pudo bajar correctamente la data")})
}, [productosFb])

// if(productos === []){
//   return(<div className="container">Loading</div>)
// }

  return (
        <section className="section product-detail">
                <ItemDetail productoElegido={item}/>
        </section>
  )
};
