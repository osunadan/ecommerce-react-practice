import React from 'react';
import 'boxicons';
import ItemCarrito from './ItemCarrito';

export default function Carrito() {
  return (
    <section className="section carrito">
        <div className="container">
            <div className="top title--carito d-flex">
                <h2>Tu carrito</h2>
        </div>
        <div className="col-1 checkout">
            <h3 className="checkout-heading">Detalles para el envío</h3>
            <div className="payment-form">
                <form action="#">
                    <div className="name-lastname-container d-flex">
                        
                        <div className="name d-flex input--container">
                        <label htmlFor="cardholder-name" className="label-default">Nombre</label>
                        <input type="text" id="cardholder-name" className="input-default" />
                        </div>

                        <div className="last-name d-flex input--container">
                        <label htmlFor="cardholder-lastname" className="label-default">Apellido</label>
                        <input type="text" id="cardho lder-lastname" className="input-default" />
                        </div>
                    </div>

                    <div className="adress d-flex input--container">
                        <label htmlFor="adress" className="label-default">Dirección de envío</label>
                        <input type="text" id="adress" className="input-default" />
                    </div>

                    <div className="phone d-flex input--container">
                        <label htmlFor="phone" className="label-default">Número de telefono</label>
                        <input type="number" id="phone" className="input-default" />
                    </div>

                    <div className="email-container d-flex">
                        
                        <div className="email1 d-flex  input--container">
                        <label htmlFor="email1" className="label-default">Email</label>
                        <input type="email" id="email1" className="input-default" />
                        </div>

                        <div className="email2 d-flex  input--container">
                        <label htmlFor="email2" className="label-default">Ingresa de nuevo tu email</label>
                        <input type="email" id="email2" className="input-default" />
                        </div>
                    </div>

                    <button className="btn">Enviar</button>
                </form>
            </div>
        </div>
        <div className="col-2 order-summery">
            <h3 className="checkout-heading">Tu pedido</h3>
            <div className="d-flex">
                <span><box-icon name='trash-alt'></box-icon></span>
                <p>Vaciar todo el carrito</p>
            </div>
        <ItemCarrito/>
     
        <div className="total--Container">
            <div className="total">
            <h2>Total</h2>
            <p>$18.95</p>
            </div>
        </div>
            </div>
        </div>
    </section>
  )
}
