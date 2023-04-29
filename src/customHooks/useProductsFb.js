import { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { database } from "../services/firebaseConfig"

export default function useProducts() {
const [productosFb, setProductosFb] = useState([]);

useEffect(()=>{
const collectionProducts = collection(database, "products");

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

  return [productosFb];
}
