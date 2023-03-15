import React from 'react';
import 'boxicons';

export default function Carrito() {
  return (
    <section className="section carrito">
        <div className="row container">
            <div className="titleCarrito">
                <h2>Tu carrito</h2>
                <p>Total: $500</p>
            </div>
        <div className="carritoTitles">
            <h3>Product</h3>
            <h3>Titulo</h3>
            <h3>Cantidad</h3>
            <h3>Total</h3>
        </div>
        <div className="carritoItems">
            <img src="../../src/assets/product-1.png" alt="" />
            <div className='TituloProducto'>
                <p>Este es el titulo del producto</p>
                <span><box-icon type='solid' name='trash'></box-icon></span>
            </div>
        <div className='CantidadProducto'>
            <input type="number" value="1" />
        </div>
        <div className="TotalProducto">
            <p>$50</p>
        </div>
        </div>
        </div>
    </section>
  )
}
