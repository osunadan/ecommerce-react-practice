import { useState, useEffect } from "react";

export default function useProducts() {
const [productos, setProductos] = useState({});

const getProducts = async () => {
  try {
    const results = await fetch("../src/mock/products.json");
    const data = await results.json();
    const products = data.products;
    return setProductos(products);
  } catch (err) {
    console.log(err);
  }
};

useEffect(()=>{
getProducts();
},[])

  return productos
}
