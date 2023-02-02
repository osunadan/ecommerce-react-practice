import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination } from "swiper";
import 'swiper/css';
import Item from "./Item";

SwiperCore.use([Navigation, Pagination]);

function ItemList({productos}) {
  
    return (
      <div className="products container">
      <Swiper id="mySwiper"
        spaceBetween={100}
        slidesPerView={3}
        navigation
        pagination >
        {productos.map((prod)=>{
          return(
          <SwiperSlide key={`${prod.id}`}>
              <Item/>
          </SwiperSlide>
      )
      })}
      </Swiper>
      </div>
  )
}

export default ItemList