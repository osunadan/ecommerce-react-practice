import { React, useState, useEffect} from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import {Navigation, Pagination} from "swiper";
import 'swiper/css';
import Item from "./Item";
import TitleProductCards from './TitleProductCards';


function ItemList({productos, productosOferta}) {

    return (
      <div className="products container">
<div className="container d-flex">
        {productos.map((prod)=>{
          return(
              <Item image={prod.url} title={prod.title} price={prod.price} id={prod.id}/>
          )})}
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