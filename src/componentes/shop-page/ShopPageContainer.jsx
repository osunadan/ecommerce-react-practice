import {React, useState, useEffect} from 'react';
import CategoriasContainer from '../product-cards/CategoriasContainer';
import {useParams} from 'react-router-dom';
import {collection, getDocs, query, where} from "firebase/firestore";
import {database} from "../../services/firebaseConfig"
import Item from "../product-cards/Item";



export default function ShopPageContainer() {
const [selectedValue, setSelectedValue] = useState("");
const [show, setShow] = useState(true);
const [productos, setProductos] = useState([]);
const [productosInput, setProductosInput] = useState([]);
const {categoryName} = useParams();
const collectionProducts = collection(database, "products");

  const handleSelectChange = (event) => {
    setSelectedValue(event.target.value);
    setShow(false);
  };


  useEffect(() => {
const querysNavbar = {
    Tech: query(collectionProducts, where("category", "==", "Tech")),
    Accessories: query(collectionProducts, where("category", "==", "Accessories")),
    Shoes: query(collectionProducts, where("category", "==", "Shoes")),
    Clothes: query(collectionProducts, where("category", "==", "Clothes"))
};

const refNavbar = categoryName ? querysNavbar[categoryName] : collectionProducts;

    getDocs(refNavbar)
    .then((res)=>{ 
        const productosTransformados = res.docs.map((prod)=>{
            return {
                id: prod.id,
                ...prod.data()
            }
        });
        setProductos(productosTransformados);
         }).catch((error)=>{console.log("No se pudo bajar correctamente la data " + error)})

// <-------------- ----------------> 
    if(selectedValue === "Oferta"){
      const productosEnOferta = [...productos]
      setProductosInput((productosEnOferta.filter((prod) => prod.oferta === "true")));
    }
    if(selectedValue === "PrecioMenor"){
        const parsedProducts = productos.map((product) => {
            return {...product, price: parseInt(product.price)}
       });
        
       parsedProducts.sort((first, second) =>{
         if (first.price > second.price){
             return 1
            } else {
            return -1
        }})
    
        setProductosInput(parsedProducts);  
       } 
       
       if(selectedValue === "PrecioMayor"){
        const parsedProducts = productos.map((product) => {
          return {...product, price: parseInt(product.price)}});
            parsedProducts.sort((first, second) =>{
                 if (first.price < second.price){
                    return 1 } 
                    else {return -1}})
        setProductosInput(parsedProducts);
                 }
     if(selectedValue === "Todos"){
      setShow(true); } 
    },[categoryName, selectedValue])

  return (
    <section className="section all-products">
        <div className="top container d-flex">
            <h2>Todos los productos</h2>
            <form>
                <select id="filtro" name="Filtro" onChange={handleSelectChange}>
                    <option value="Todos">Todos</option>
                    <option value="PrecioMenor">Menor a mayor precio</option>
                    <option value="PrecioMayor">Mayor a menor precio</option>
                    <option value="Oferta">En oferta</option>
                </select>
            </form>
        </div>

        <div className='container collection'>
            <CategoriasContainer/>
        </div>
        <div className="product-center container d-flex">
            {show ? productos.map((prod)=>{
                return(<Item key={prod.id} image={prod.url} title={prod.title} price={prod.price} id={prod.id}/>)}) 
                : 
                productosInput.map((prod)=>{
                return(<Item key={prod.id} image={prod.url} title={prod.title} price={prod.price} id={prod.id}/>)})
            }
        </div>
    </section>
  )
}


