import React from 'react'
import { useState, useEffect } from "react";
import { products } from "../../mock/products";
import Categorias from './Categorias';

function CategoriasContainer() {
const [cat, setCat] = useState([]);

useEffect(() => {
    const categorias = products.map((prod) => {
				return prod.category;
			});

			const removeDuplicates = (array) => {
				return array.filter((el, index) => array.indexOf(el) === index);}

    const categoríasSinDuplicados = removeDuplicates(categorias);
			setCat(categoríasSinDuplicados);
},[])

  return (
      <>
    <Categorias categorias={cat}/>
    </>
  )
}

export default CategoriasContainer