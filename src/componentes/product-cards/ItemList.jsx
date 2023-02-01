import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper";
import 'swiper/css';
import Item from "./Item";

function ItemList({productos}) {
  
    return (
      <div className="products container">
      <Swiper id="mySwiper"
        paceBetween={50}
        slidesPerView={3}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}>
        {productos.map(()=>{
          return(
          <SwiperSlide>
              <Item/>
          </SwiperSlide>
      )
      })}
      </Swiper>
      </div>
  )
}

export default ItemList