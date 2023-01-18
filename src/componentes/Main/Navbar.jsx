import React from 'react';
import { useState } from 'react';
import { Link } from "react-router-dom";
import 'boxicons'
import CartWidget from '../Checkout/CartWidget';
import Hamburger from './Hamburger';

const Navbar = () => {
const [show, setShow] = useState("")

const handleShow = () => {
    console.log("funciona")
    setShow("show")}

  return (
    <nav className='navbar'>
        <div className='row container d-flex'>
            <div className="logo">
                <img  src="src/assets/Siete.svg" alt="Logo de la empresa" />
            </div>
            <div className={`nav-list d-flex${show}`}>
                <Link to="/">Home</Link>
                <Link to="/">Shop</Link>
                <Link to="/">Pages</Link>
                <Link to="/">About Us</Link>
                <Link to="/">Lookups</Link>
                <div className="close">
                    <box-icon name='x'></box-icon>
                </div>
                <Link to="/" className="user-link">Login</Link>
            </div>

            <div className="icons d-flex"> 
                <div className="icon d-flex"><box-icon name='search'></box-icon></div>
                <div className="icon d-flex user-icon"><box-icon name='user-circle'></box-icon></div>
                <CartWidget/>
            </div>
            <Hamburger onClick={handleShow}/>
        </div>
    </nav>
  )
}

export default Navbar;