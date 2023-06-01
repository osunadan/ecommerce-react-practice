import React from 'react';
import { useState } from 'react';
import { Link } from "react-router-dom";
import 'boxicons';
import CartWidget from '../Checkout/CartWidget';

const Navbar = () => {
const [show, setShow] = useState(false)

function  handleShow() {
    setShow(true)
};

  return (
    <nav className='navbar'>
        <div className='row container d-flex'>
            <div className="logo">
                <Link to={"/"}>
                <img  src="../../src/assets/Siete.svg" alt="Logo de la empresa" />
                </Link>
            </div>
            <div className={`nav-list d-flex ${show ? 'show' : ''}`}>
                <Link to="/">Home</Link>
                <Link to="/shop">Shop</Link>
                <Link to="/statusPedido">Mi pedido</Link>
                <div className="close" onClick={()=>{setShow(false)}}>
                    <box-icon name='x'></box-icon>
                </div>
            </div>

    <div className='d-flex'>
        <div className="icons d-flex"> 
                <CartWidget/>
            </div>
            <div type="button" className="hamburger" onClick={handleShow}>
                <box-icon name='menu'></box-icon>
            </div>
    </div>
        </div>
    </nav>
  )
}

export default Navbar;