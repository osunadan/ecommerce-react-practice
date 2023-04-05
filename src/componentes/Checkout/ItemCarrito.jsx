import React from 'react';
import 'boxicons';
import Contador from "../products-detail/Contador"

export default function ItemCarrito() {
  return (
    <div className="carritoItems d-flex">
        <div className="col-1">
            <img src="../../src/assets/product-1.png" alt="" />
        </div>
        <div className="col-2">
            <div className='top'>
                <h3>Este es el titulo del producto</h3>
            </div>
            <div className="bottom d-flex">
            <Contador enCarrito={true}/>
            <p className="price">$50</p>
            </div>
        </div>
        <div className="col-3">
        <box-icon name='x'></box-icon>
        </div>
        </div>
  )
}
