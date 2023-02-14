import React from 'react'

function Hero() {
  return (
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
  )
}

export default Hero