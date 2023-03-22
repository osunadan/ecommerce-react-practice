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
  };

  useEffect(() => {
    if(selectedValue === "Oferta"){
        setProductosFiltrados(productos.filter((prod) => prod.oferta === "true"))
    }  if(selectedValue === "PrecioMenor"){
        const productosParaPrecio = [...productos];
        productosParaPrecio.sort((first, second) =>{
            if (first.price > second.price){
                 return 1
            } else {
                return -1
            }})
            setProductosFiltrados(productosParaPrecio)
        }
    }, [show])
  

  return (
    <section className="section all-products">
        <div className="top container d-flex">
            <h2>Todos los productos</h2>
            <form>
                <select id="filtro" name="Filtro" onChange={handleSelectChange}>
                    <option value="Todos">Todos</option>
                    <option value="PrecioMenor">$ - $$$</option>
                    <option value="Oferta">En oferta</option>
                    <option value="Hombre">Hombre</option>
                    <option value="Mujer">Mujer</option>
                </select>
            </form>
        </div>

        <div className="product-center container d-flex">
            {show ? productos.map((prod)=>{
                return(<Item key={`${prod.id}`} image={prod.url} title={prod.title} price={prod.price} />
            )}) : productosFiltrados.map((prod)=>{
                return(<Item key={`${prod.id}`} image={prod.url} title={prod.title} price={prod.price} />
            )})}
        </div>
    </section>
  )
}
