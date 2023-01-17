import React from 'react';
import { Link } from "react-router-dom";
import 'boxicons'

const Navbar = () => {
  return (
    <nav className='navbar'>
        <div className='row container d-flex'>
            <div className="logo">
                <img  src="src/assets/Siete.svg" alt="Logo de la empresa" />
            </div>
            <div className='nav-list d-flex'>
                <Link to="/">Home</Link>
                <Link to="/">Shop</Link>
                <Link to="/">Pages</Link>
                <Link to="/">About Us</Link>
                <Link to="/">Lookups</Link>
                <Link to="/" className="user-link">Login</Link>
            </div>

            <div className="icons d-flex">
                <div className="icon d-flex"><box-icon name='search'></box-icon></div>
                <div className="icon d-flex"><box-icon name='user-circle'></box-icon></div>
            </div>
        </div>
    </nav>
  )
}

export default Navbar;