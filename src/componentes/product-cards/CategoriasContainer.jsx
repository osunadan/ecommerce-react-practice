import React from 'react'
import { useState, useEffect } from "react";
import Categorias from './Categorias';
import useProductsFb from '../../customHooks/useProductsFb';

function CategoriasContainer() {
const [cat, setCat] = useState([]);
const [productosFb, productosFbFiltrados, collectionProducts] = useProductsFb();

useEffect(() => {
    const categorias = productosFb.map((prod) => {
				return prod.category;
			});

			const removeDuplicates = (array) => {
				return array.filter((el, index) => array.indexOf(el) === index);}

    const categoríasSinDuplicados = removeDuplicates(categorias);
			setCat(categoríasSinDuplicados);
}, [productosFb])

  return (
    <>
    <Categorias categorias={cat}/>
    </>
  )
}

export default CategoriasContainer