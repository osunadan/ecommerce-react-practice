import React from 'react';

function Header() {
  return (
    <header className='header'>
        <div className='hero'>
        <div className="row container d-flex">
            <div className="col">
                <span className='subtitle'>Limited Time Only For Winter</span>
                <h1>S<span className="i">i</span>ete</h1>
                <p>LOOK YOUR BEST ON YOUR BEST DAY</p>
                <button className="btn">Explore Now</button>
            </div>
            <img src="../../src/assets/woman-in-cart.png" alt="Woman in cart" />
        </div>
    </div>
    </header>
  )
}

export default Header