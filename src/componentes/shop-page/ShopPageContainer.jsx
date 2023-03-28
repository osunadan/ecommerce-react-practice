import {React, useState, useEffect} from 'react';
import Item from "../product-cards/Item";
import useProducts from '../../customHooks/useProducts';


export default function ShopPageContainer() {
const [selectedValue, setSelectedValue] = useState("");
const [show, setShow] = useState(true)
const [productosFiltrados, setProductosFiltrados] = useState([]);
const productos = useProducts();

  const handleSelectChange = (event) => {
    setSelectedValue(event.target.value);
    setShow(false);
    console.log(selectedValue);
  };

  useEffect(() => {
    if(selectedValue === "Oferta"){
        const productosEnOferta = [...productos]
        setProductosFiltrados(productosEnOferta.filter((prod) => prod.oferta === "true"));
        console.log("Estoy mostrando los productos en oferta")
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
            setProductosFiltrados(parsedProducts);
            console.log("Estoy mostrando los productos de menor a mayor precio");
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
            setProductosFiltrados(parsedProducts);
            console.log("Estoy mostrando los productos de mayor a menor precio");
        } if(selectedValue === "Todos"){
            setShow(true);
            console.log("Estoy mostrando todos los productos")
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
            )}) : productosFiltrados.map((prod)=>{
                return(<Item key={`${prod.id}`} image={prod.url} title={prod.title} price={prod.price} id={prod.id}/>
            )})}
        </div>
    </section>
  )
}
