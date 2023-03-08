import React from 'react'
import Navbar from '../Main/Navbar';
import ItemDetail from "./ItemDetail";

export default function ItemDetailContainer() {
  return (
    <div>
        <section className="section detail">
            <div className="row container">
                <Navbar/>
                <ItemDetail/>
            </div>
        </section>
    </div>
  )
};
