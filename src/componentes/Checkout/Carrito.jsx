import React from 'react';
import 'boxicons';

export default function Carrito() {
  return (
    <section className="section carrito">
        <div className="col container">
            <div className="top">
                <div className="titleCarrito">
                <h2>Tu carrito</h2>
                <p>Total: $500</p>
            </div>
        </div>
        <div className="row">
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
                <div className="d-flex">
                <span><box-icon type='solid' name='trash'></box-icon></span>
                <p>Eliminar producto</p>
            </div>
            </div> 
        <div className='CantidadProducto'>
            <input type="number" value="1" />
        </div>
        <div className="TotalProducto">
            <p>$50</p>
        </div>
        </div>
        <div className="carritoActions">
            <div className="d-flex">
                <span><box-icon name='trash-alt'></box-icon></span>
                <p>Vaciar carrito</p>
            </div>
            <button className="btn">Ir a pagar</button>
        </div>
        </div>
        <div className="row">
            </div>
        </div>
    </section>
  )
}
