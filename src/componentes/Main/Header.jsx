import React from 'react';
import { Link } from "react-router-dom";
import imgUrl from  '../../../src/assets/woman-in-cart.png';

function Header() {
  return (
    <header className='header'>
        <div className='hero'>
        <div className="row container d-flex">
            <div className="col">
                <span className='subtitle'>Limited Time Only For Winter</span>
                <h1>S<span className="i">i</span>ete</h1>
                <p>LOOK YOUR BEST ON YOUR BEST DAY</p>
                <Link to={"/shop"}>
                <button className="btn">Explore Now</button>
                </Link>
            </div>
            <img src={imgUrl} alt="Woman in cart" />
        </div>
    </div>
    </header>
  )
}

export default Header