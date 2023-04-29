import {React, useState, useEffect} from 'react';
import Item from "../product-cards/Item";
import useProducts from '../../customHooks/useProducts';
import useProductsFb from "../../customHooks/useProductsFb";


export default function ShopPageContainer() {
const [selectedValue, setSelectedValue] = useState("");
const [show, setShow] = useState(true)
const [productosCategorizados, setProductosCategorizados] = useState([]);
const [productos, productosFiltrados] = useProducts();

const [productosFb] = useProductsFb();


  const handleSelectChange = (event) => {
    setSelectedValue(event.target.value);
    setShow(false);
  };

  useEffect(() => {
    if(selectedValue === "Oferta"){
        const productosEnOferta = [...productos]
        setProductosCategorizados(productosEnOferta.filter((prod) => prod.oferta === "true"));
        
    }  if(selectedValue === "PrecioMenor"){

        const parsedProducts = productos.map((product) => {
            return {
                ...product,
                    price: parseInt(product.price)
            }
            });
        parsedProducts.sort((first, second) =>{
            if (first.price > second.price){
                 return 1
            } else {
                return -1
            }})
            setProductosCategorizados(parsedProducts);
            
        } if(selectedValue === "PrecioMayor"){
        const parsedProducts = productos.map((product) => {
            return {
                ...product,
                    price: parseInt(product.price)
            }
            });
                parsedProducts.sort((first, second) =>{
            if (first.price < second.price){
                 return 1
            } else {
                return -1
            }})
            setProductosCategorizados(parsedProducts);
            
        } if(selectedValue === "Todos"){
            setShow(true);
            
           }
    }, [selectedValue])
  

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

        <div className="product-center container d-flex">
            {show ? productos.map((prod)=>{
                return(<Item key={`${prod.id}`} image={prod.url} title={prod.title} price={prod.price} id={prod.id}/>
            )}) : productosCategorizados.map((prod)=>{
                return(<Item key={`${prod.id}`} image={prod.url} title={prod.title} price={prod.price} id={prod.id}/>
            )})}
        </div>
    </section>
  )
}
