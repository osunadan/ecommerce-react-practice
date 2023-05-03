import { useState, useEffect } from "react";
import { collection, getDocs, query, where } from "firebase/firestore";
import { database } from "../services/firebaseConfig"

export default function useProductsFb(categoria) {
const [productosFb, setProductosFb] = useState([]);

console.log(categoria)

useEffect(()=>{
const collectionProducts = collection(database, "products");

const productos = categoria ? query(collectionProducts, where("category", "==", categoria)) : collectionProducts;

getDocs(productos)
    .then((res)=>{ 
        const productosTransformados = res.docs.map((prod)=>{
            return {
                id: prod.id,
                ...prod.data()
            }
        });
        setProductosFb(productosTransformados)
    })
    .catch((error)=>{console.log("No se pudo bajar correctamente la data")})
},[categoria])

  return productosFb;
}
