import { useState, useEffect } from "react";
import CategoriasContainer from './CategoriasContainer'
import ItemList from './ItemList'
import TitleProductCards from './TitleProductCards';
import useProducts from '../../customHooks/useProducts';

function ItemListContainer() {
const productos = useProducts();

const productosOferta = productos.filter((prod) => prod.oferta === "true");

  return (
   <section className='section collection'>
    <TitleProductCards/>
    <CategoriasContainer/>
    <ItemList productos={productos} productosOferta={productosOferta}/>
    </section>
  )
}

export default ItemListContainer