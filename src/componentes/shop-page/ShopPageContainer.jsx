import {React, useState, useEffect} from 'react';
// import useProductsFb from "../../customHooks/useProductsFb";
import CategoriasContainer from '../product-cards/CategoriasContainer';
import {useParams} from 'react-router-dom';
import {collection, getDocs, query, where} from "firebase/firestore";
import {database} from "../../services/firebaseConfig"


export default function ShopPageContainer() {
const [selectedValue, setSelectedValue] = useState("");
const [show, setShow] = useState(true);
const [productosCategorizados, setProductosCategorizados] = useState([]);
const {categoryName} = useParams();
// const [productosFb, productosFbFiltrados, collectionProducts] = useProductsFb();
const collectionProducts = collection(database, "products");

  const handleSelectChange = (event) => {
    setSelectedValue(event.target.value);
    setShow(false);
  };


  useEffect(() => {
const productosFiltradosNavBar = {
    Tech: query(collectionProducts, where("category", "==", "Tech")),
    Accessories: query(collectionProducts, where("category", "==", "Accessories")),
    Shoes: query(collectionProducts, where("category", "==", "Shoes")),
    Clothes: query(collectionProducts, where("category", "==", "Clothes"))
};

const productosFiltradosForm = {
    Oferta: query(collectionProducts, where("oferta", "==", "true")),
};

const refNavbar = categoryName ? productosFiltradosNavBar[categoryName || selectedValue] : collectionProducts;

const refForm = selectedValue ? productosFiltradosForm[selectedValue] : collectionProducts;

    getDocs(categoryName ? refNavbar : selectedValue ? refForm : collectionProducts)
    .then((res)=>{ 
        const productosTransformados = res.docs.map((prod)=>{
            return {
                id: prod.id,
                ...prod.data()
            }
        });
        setProductosCategorizados(productosTransformados);
         }).catch((error)=>{console.log("No se pudo bajar correctamente la data " + error)})

/* La solución esta en aplicar el codigo de abajo a lo que sea que este en el estado "productosCategorizados" 
porque fb y los querys se encargan de bajar la data ya sea completa o categporizada pero termina en un 
array con objetos, ya solo le aplicas la logica de abajo a ese array de objetos */

    // if(selectedValue === "Oferta"){
      //  const productosEnOferta = [...productosFb]
      //  setProductosCategorizados(productosEnOferta.filter((prod) => prod.oferta === "true"));
        //
   // }  if(selectedValue === "PrecioMenor"){

     //   const parsedProducts = productosFb.map((product) => {
       //     return {
         //       ...product,
           //         price: parseInt(product.price)
            //}
       //     });
      //  parsedProducts.sort((first, second) =>{
       //     if (first.price > second.price){
         //        return 1
          //  } else {
            //    return -1
    //        }})
           // setProductosCategorizados(parsedProducts);
            
       // } if(selectedValue === "PrecioMayor"){
       // const parsedProducts = productos.map((product) => {
         //   return {
//                ...product,
  //                  price: parseInt(product.price)
    //        }
      //      });
        //        parsedProducts.sort((first, second) =>{
   //         if (first.price < second.price){
     //            return 1
       //     } else {
         //       return -1
           // }})
    //        setProductosCategorizados(parsedProducts);
      //      
    //    } if(selectedValue === "Todos"){
      //      setShow(true);
        //    
      //     } 
    },[categoryName])

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
        
           </div>
    </section>
  )
}


