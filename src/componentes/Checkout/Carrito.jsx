import {React, useContext, useState} from 'react';
import { CartContext } from "../../componentes/Context/CartContext";
import { Link } from "react-router-dom";
import 'boxicons';
import ItemCarrito from './ItemCarrito';

export default function Carrito() {
const { cart, totalPrecioUnidad, deleteCart, deleteItem } = useContext(CartContext);

    const [name, setName] = useState("");
    console.log(name)
	const [lastName, setLastName] = useState("");
	const [adress, setAdress] = useState("");
	const [email1, setEmail1] = useState("");
	const [email2, setEmail2] = useState("");
	const [telefono, setTelefono] = useState("");
	const [orderId, setOrderId] = useState(undefined);
	const [err, setErr] = useState("");

    const handleName = (e) => setName(e.target.value);
	const handleLastName = (e) => setLastName(e.target.value);
	const handleAdress = (e) => setAdress(e.target.value);
	const handleEmail1 = (e) => setEmail1(e.target.value);
	const handleEmail2 = (e) => setEmail2(e.target.value);
	const handleTelefono = (e) => setTelefono(e.target.value);

    const enviarDatos = (e) => {
		e.preventDefault();
		if (email1 === email2 && name !== "" && lastName !== "" && adress !== "" && telefono !== "") {
		} else {
			setErr("Por favor llena correctamente los campos");
		}
	};

if (cart.length === 0)
		return (
            <section className="carritoVacioContainer section d-flex">
            <div className=" row container">
			<h3 className="mensajeCarritoVacio">
				Aun no has agregado productos al carrito, te invitamos a <Link to="/shop" className='shopEnlace'> la pagina de shop </Link> para que selecciones alguno de neustros productos
			</h3>
            </div>
            </section >
		);

  return (
    <section className="section carrito">
        <div className="container">
            <div className="top title--carito d-flex">
                <h2>Tu carrito</h2>
        </div>
        <div className="col-1 checkout">
            <div>
            <h3 className="checkout-heading">Detalles para el envío</h3>
            <p className='mensajeError'>{err}</p>
            </div>
            <div className="payment-form">
                <form action="#" onSubmit={enviarDatos}>
                    <div className="name-lastname-container d-flex">
                        
                        <div className="name d-flex input--container">
                        <label htmlFor="cardholder-name" className="label-default">Nombre</label>
                        <input onChange={handleName} type="text" id="cardholder-name" className="input-default" />
                        </div>

                        <div className="last-name d-flex input--container">
                        <label htmlFor="cardholder-lastname" className="label-default">Apellido</label>
                        <input onChange={handleLastName} type="text" id="cardho lder-lastname" className="input-default" />
                        </div>
                    </div>

                    <div className="adress d-flex input--container">
                        <label htmlFor="adress" className="label-default">Dirección de envío</label>
                        <input onChange={handleAdress} type="text" id="adress" className="input-default" />
                    </div>

                    <div className="phone d-flex input--container">
                        <label htmlFor="phone" className="label-default">Número de telefono</label>
                        <input onChange={handleTelefono} type="number" id="phone" className="input-default" />
                    </div>

                    <div className="email-container d-flex">
                        
                        <div className="email1 d-flex  input--container">
                        <label htmlFor="email1" className="label-default">Email</label>
                        <input onChange={handleEmail1} type="email" id="email1" className="input-default" />
                        </div>

                        <div className="email2 d-flex  input--container">
                        <label htmlFor="email2" className="label-default">Ingresa de nuevo tu email</label>
                        <input onChange={handleEmail2} type="email" id="email2" className="input-default" />
                        </div>
                    </div>
                    

                    <button className="btn">Enviar</button>
                </form>
            </div>
        </div>
        <div className="col-2 order-summery">
            <div className="checkout-heading">
            <h3>Tus productos</h3>
            <span onClick={deleteCart} className='d-flex'><box-icon name='trash-alt'></box-icon>Vaciar carrito</span>  
            </div>
            {cart.map((prod)=>{
                return(
                    <ItemCarrito key={`${prod.id}`} image={prod.url} title={prod.title} total={prod.price * prod.cantidad} borrarItem={()=>deleteItem()}/>
                )
            })}
        <div className="total--Container">
            <div className="total">
            <h2>Total</h2>
            <p>${totalPrecioUnidad()}</p>
            </div>
        </div>
            </div>
        </div>
    </section>
  )
}
