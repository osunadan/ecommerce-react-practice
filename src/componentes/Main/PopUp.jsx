import {React, useState, useEffect, useRef} from 'react';
import 'boxicons';

export default function PopUp() {
const [show, setShow] = useState(false);
const popUp = useRef(null);

if(show){
    popUp.current.classList.add("hide-popup");
}

useEffect(() => {
  window.addEventListener("load", () => {
    setTimeout(() => {
      popUp.current.classList.remove("hide-popup");
    }, 1000);
  });
}, [])


  return (
    <div className="popup hide-popup" ref={popUp}>
    <div className="popup-content">
      <div className="popup-close" onClick={()=>setShow(true)}>
            <box-icon type='solid' name='x-circle' color="white"></box-icon>
      </div>
      <div className="popup-left">
        <div className="popup-img-container">
          <img className="popup-img" src="../assets/blog-1.png" alt="popup"/>
        </div>
      </div>
      <div className="popup-right">
        <div className="right-content">
          <h2>Get Discount <span>50%</span> Off</h2>
          <p>Sign up to our newsletter and save 30% for you next purchase. No spam, we promise!
          </p>
          <form action="#">
            <input type="email" placeholder="Enter your email..." className="popup-form"/>
            <button className="btn" href="#">Subscribe</button>
          </form>
        </div>
      </div>
    </div>
    </div>
  )
}
