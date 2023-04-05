import React from 'react';
import 'boxicons';
import ItemCarrito from './ItemCarrito';

export default function Carrito() {
  return (
    <section className="section carrito">
        <div className="container">
            <div className="top">
                <div className="titleCarrito">
                <h2>Tu carrito</h2>
                <p>Total: $500</p>
            </div>
        </div>
        <div className="col-1 checkout">
            <h2 className="checkout-heading">Detalles para el envío</h2>
            <div className="payment-form">
                <form action="#">
                    <div className="name-lastname-container">
                        
                        <div className="name">
                        <label htmlFor="cardholder-name" className="label-default">Nombre</label>
                        <input type="text" id="cardholder-name" className="input-default" />
                        </div>

                        <div className="last-name">
                        <label htmlFor="cardholder-lastname" className="label-default">Apellido</label>
                        <input type="text" id="cardholder-lastname" className="input-default" />
                        </div>
                    </div>

                    <div className="adress">
                        <label htmlFor="adress" className="label-default">Dirección de envío</label>
                        <input type="text" id="adress" className="input-default" />
                    </div>

                    <div className="phone">
                        <label htmlFor="phone" className="label-default">Número de telefono</label>
                        <input type="number" id="phone" className="input-default" />
                    </div>

                    <div className="email-container">
                        
                        <div className="email1">
                        <label htmlFor="email1" className="label-default">Email</label>
                        <input type="email" id="email1" className="input-default" />
                        </div>

                        <div className="email2">
                        <label htmlFor="email2" className="label-default">Ingresa de nuevo tu email</label>
                        <input type="email" id="email2" className="input-default" />
                        </div>
                    </div>

                    <button className="btn">Enviar</button>
                </form>
            </div>
        </div>
        <div className="col-2 order-summery">
            <h2 className="checkout-heading">Tu pedido</h2>
            <div className="d-flex">
                <span><box-icon name='trash-alt'></box-icon></span>
                <p>Vaciar todo el carrito</p>
            </div>
        <ItemCarrito/>
        <div className="total d-flex">
            <h2>Total</h2>
            <p>$18.95</p>
        </div>
            </div>
        </div>
    </section>
  )
}
