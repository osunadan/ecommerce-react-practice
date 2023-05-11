import { React, useState, useEffect} from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import {Navigation, Pagination} from "swiper";
import 'swiper/css';
import Item from "./Item";
import TitleProductCards from './TitleProductCards';


function ItemList({productos, productosFiltrados, categoria, productosOferta}) {
const [productosPorPartes, setProductosPorPartes] = useState(productos.filter((_, index) => index < 4));
const [mostrarTodo, setMostrarTodo] = useState(false);


useEffect(() => {
window.onload = function(){
    setProductosPorPartes(productos.filter((_, index) => index < 4))
}
})

const loadData = (e) =>{
    if (mostrarTodo){
        e.target.disabled = true;
        e.target.innerHTML = "No more products";
        return;
    }
    setMostrarTodo(true);
    }

    return (
      <div className="products container">
<div className="container d-flex">
        {mostrarTodo ? ( categoria ? productosFiltrados.map((prod)=>{
            return(
                <Item key={`${prod.id}`} image={prod.url} title={prod.title} price={prod.price} id={prod.id}/>
            )}) : productos.map((prod)=>{
            return(
                <Item key={`${prod.id}`} image={prod.url} title={prod.title} price={prod.price} id={prod.id}/>
            )}) )
        : productosPorPartes.map((prod)=>{
            return(
                <Item key={`${prod.id}`} image={prod.url} title={prod.title} price={prod.price}  id={prod.id}/>
            ) 
        }) }
</div>

<div className="button d-flex">
        <button className="btn loadmore" onClick={(e)=> loadData(e)}>Load More</button>
      </div>    

        <TitleProductCards title={"OFERTAS"} subTitle={"24h"}/>
      <Swiper id="main"
            modules={[Navigation, Pagination]}
            spaceBetween={70}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            breakpoints={{
                0: {
                    spaceBetween:1,
                    slidesPerView: 1
                },
                567: {
                    spaceBetween:1,
                    slidesPerView:2
                },
                996: {
                    spaceBetween: 1,
                    slidesPerView:2
                },
                1920: {
                    spaceBetween: 4,
                    slidesPerView:4
                }
            }
        }>
        
        {productosOferta.map((prod)=>{
          return(
          <SwiperSlide key={`${prod.id}`}>
              <Item image={prod.url} title={prod.title} price={prod.price} oferta={"sale"}/>
          </SwiperSlide>)})}
      </Swiper>
    </div>
  )
}

export default ItemList