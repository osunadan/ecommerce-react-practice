import React from 'react'
import 'boxicons'

function Item({image, title, price}) {
  return (
    <div className="product" >
        <div className="top d-flex">
            <img src={image} alt="Producto 1" />
            <div className="icon d-flex">
                <p>Add to cart</p>
            </div>
        </div>
        <div className="bottom" >
            <h4>{title}</h4>
            <div className="d-flex">
                <div className="price">${price}</div>
                <div className="rating">
                    <box-icon name='star' type='solid' color="#ecc042"></box-icon>
                    <box-icon name='star' type='solid' color="#ecc042"></box-icon>
                    <box-icon name='star' type='solid' color="#ecc042"></box-icon>
                    <box-icon name='star' type='solid' color="#ecc042"></box-icon>
                    <box-icon name='star' type='solid' color="#ecc042"></box-icon>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Item