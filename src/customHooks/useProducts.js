import { useState, useEffect } from "react";

export default function useProducts(categoryName) {
const [productos, setProductos] = useState([]);
const [productosFiltrados, setProductosFiltrados] = useState([]);

const getProducts = async () => {
  try {
    const results = await fetch("../src/mock/products.json");
    const data = await results.json();
    const products = data.products;
    setProductos(products);
  } catch (err) {
    console.log("Error");
  }
};

const filtro = (categoryName) => {
setProductosFiltrados(productos.filter((prod)=> prod.category === categoryName))
}

useEffect(()=>{
getProducts()
},[])

useEffect(()=>{
filtro(categoryName);
},[productos, categoryName])

  return [productos, productosFiltrados];
}
