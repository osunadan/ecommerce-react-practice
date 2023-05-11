import { useState, useEffect } from "react";
import {getDocs, query, where} from "firebase/firestore";
import CategoriasContainer from './CategoriasContainer'
import ItemList from './ItemList'
import TitleProductCards from './TitleProductCards';
import useProducts from '../../customHooks/useProducts';
import useProductsFb from '../../customHooks/useProductsFb';

function ItemListContainer({categoria}) {
const [productos, productosFiltrados] = useProducts(categoria);
const [productosFb, productosFbFiltrados, collectionProducts] = useProductsFb(categoria)

useEffect(() => {
const q = query(collectionProducts, where("topCollection", "==", true));

}, [categoria])


const productosOferta = productos.filter((prod) => prod.oferta === "true");

  return (
   <section className='section collection'>
    <TitleProductCards title={"COLLECTION"} subTitle={"Our Top Collection"}/>
    <CategoriasContainer/>
    <ItemList categoria={categoria} productos={productosFb} productosFiltrados={productosFbFiltrados} productosOferta={productosOferta}/>
    </section>
  )
}

export default ItemListContainer
