import { useState, useEffect } from "react";

export default function useProducts(categoryName) {
const [productos, setProductos] = useState([]);

const getProducts = async (categoryName) => {
  try {
    const results = await fetch("../src/mock/products.json");
    const data = await results.json();
    const products = data.products;
    const productosFiltrados = products.filter((prod)=> prod.category === categoryName)
    if(categoryName){
    setProductos(productosFiltrados);
    }else{
    setProductos(products)}
  } catch (err) {
    console.log(err);
  }
};


useEffect(()=>{
getProducts(categoryName);
},[categoryName])

  return productos
}
