import React from 'react';
import { useState } from 'react';
import { Link } from "react-router-dom";
import 'boxicons'
import CartWidget from '../Checkout/CartWidget';
import Hamburger from './Hamburger';

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
                <Link to="/">Pages</Link>
                <Link to="/">About Us</Link>
                <Link to="/">Lookups</Link>
                <div className="close" onClick={()=>{setShow(false)}}>
                    <box-icon name='x'></box-icon>
                </div>
                <Link to="/" className="user-link">Login</Link>
            </div>

            <div className="icons d-flex"> 
                <div className="icon d-flex"><box-icon name='search' ></box-icon></div>
                <div className="icon d-flex user-icon"><box-icon name='user-circle'></box-icon></div>
                <CartWidget/>
            </div>
            <Hamburger type="button" show={handleShow}></Hamburger>
        </div>
    </nav>
  )
}

export default Navbar;