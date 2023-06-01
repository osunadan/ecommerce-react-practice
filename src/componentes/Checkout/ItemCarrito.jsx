import React from 'react';
import 'boxicons';

export default function ItemCarrito({image, title, total, borrarItem}) {
  return (
    <div className="carritoItems d-flex">
        <div className="col-1">
            <img src={image} alt="" />
        </div>
        <div className="col-2">
            <div className='top'>
                <h3>{title}</h3>
            </div>
            <div className="bottom d-flex">
            <p className="price">${total}</p>
            </div>
        </div>
        <div className="col-3">
        <box-icon name='x' onClick={borrarItem}></box-icon>
        </div>
        </div>
  )
}
