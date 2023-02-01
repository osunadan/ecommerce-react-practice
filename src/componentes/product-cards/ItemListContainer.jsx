import React from 'react'
import CategoriasContainer from './CategoriasContainer'
import ItemList from './ItemList'
import TitleProductCards from './TitleProductCards';
import { products } from "../../mock/products";
import {useState} from 'react';

function ItemListContainer() {
const [productos, setProductos] = useState(products);

  return (
   <section className='section collection'>
    <TitleProductCards/>
    <CategoriasContainer/>
    <ItemList productos={productos}/>
    </section>
  )
}

export default ItemListContainer