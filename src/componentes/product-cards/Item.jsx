import React from 'react'
import 'boxicons'

function Item() {
  return (
    <div className="product">
        <div className="top d-flex">
            <img src="src/assets/product-1.png" alt="Producto 1" />
            <div className="icon d-flex">
                <box-icon type='solid' name='heart'></box-icon>
            </div>
        </div>
        <div className="bottom">
            <h4>Nike Air Men’s Hoodie -  Imported Hoodie Red</h4>
            <div className="d-flex">
                <div className="price">$150</div>
                <div className="rating">
                    <box-icon name='star' type='solid' ></box-icon>
                    <box-icon name='star' type='solid' ></box-icon>
                    <box-icon name='star' type='solid' ></box-icon>
                    <box-icon name='star' type='solid' ></box-icon>
                    <box-icon name='star' type='solid' ></box-icon>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Item