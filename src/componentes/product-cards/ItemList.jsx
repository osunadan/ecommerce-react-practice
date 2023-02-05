import { React} from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import {Navigation, Pagination} from "swiper";
import 'swiper/css';
import Item from "./Item";



function ItemList({productos}) {

    return (
      <div className="products container">
      <Swiper id="main"
            modules={[Navigation, Pagination]}
            spaceBetween={100}
            slidesPerView={3}
            navigation
            pagination>
        
        {productos.map((prod)=>{
          return(
          <SwiperSlide key={`${prod.id}`}>
              <Item image={prod.url} title={prod.title} price={prod.price}/>
          </SwiperSlide>)})}

      </Swiper>
      </div>  
  )
}

export default ItemList