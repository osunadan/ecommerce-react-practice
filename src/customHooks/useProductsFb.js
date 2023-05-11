import { useState, useEffect } from "react";
import { collection, getDocs, query, where, orderBy, limit } from "firebase/firestore";
import { database } from "../services/firebaseConfig"

export default function useProductsFb(categoria) {
const [productosFb, setProductosFb] = useState([]);
const [productosFbFiltrados, setProductosFbFiltrados] = useState([]);

const collectionProducts = collection(database, "products");

useEffect(()=>{
getDocs(collectionProducts)
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
},[])

useEffect(()=>{
if (categoria) {
    const productosFiltrados = query(collectionProducts, where("category", "===", categoria));
    getDocs(productosFiltrados) 
    .then((res)=>{ 
        const productosTransformados = res.docs.map((prod)=>{
            return {
                id: prod.id,
                ...prod.data()
            }
        });
        setProductosFbFiltrados(productosTransformados)
    })
    .catch((error)=>{console.log("No se pudo bajar correctamente la data")})
}

}, [categoria])

  return [productosFb, productosFbFiltrados, collectionProducts];
}
