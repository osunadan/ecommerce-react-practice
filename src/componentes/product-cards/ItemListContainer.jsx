import { useState, useEffect } from "react";
import {getDocs, query, where} from "firebase/firestore";
import CategoriasContainer from './CategoriasContainer'
import ItemList from './ItemList'
import TitleProductCards from './TitleProductCards';
import useProducts from '../../customHooks/useProducts';
import useProductsFb from '../../customHooks/useProductsFb';

function ItemListContainer({categoria}) {
const [topProducts, setTopProducts] = useState([])
const [productos, productosFiltrados] = useProducts(categoria);
const [productosFb, productosFbFiltrados, collectionProducts] = useProductsFb()

useEffect(() => {
const q = query(collectionProducts, where("topCollection", "==", true));

getDocs(q)
.then((res)=>{ 
        const productosTransformados = res.docs.map((prod)=>{
            return {
                id: prod.id,
                ...prod.data()
            }
        });
        setTopProducts(productosTransformados)
    })
    .catch((error)=>{console.log("No se pudo bajar correctamente la data")})
}, [categoria])


const productosOferta = productos.filter((prod) => prod.oferta === "true");

  return (
   <section className='section collection'>
    <TitleProductCards title={"COLLECTION"} subTitle={"Our Top Collection"}/>
    <ItemList categoria={categoria} productos={topProducts} productosOferta={productosOferta}/>
    </section>
  )
}

export default ItemListContainer
