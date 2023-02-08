import React from 'react'
import { useState, useEffect } from "react";
import Categorias from './Categorias';
import useProducts from '../../customHooks/useProducts';

function CategoriasContainer() {
const [cat, setCat] = useState([]);
const productos = useProducts();

useEffect(() => {
    const categorias = productos.map((prod) => {
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