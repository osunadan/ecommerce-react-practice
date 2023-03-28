import React from 'react'

export default function ItemDetail({title, image, precio}) {
  return (
    <div className="detail container">
        <div className="left image-container">
            <div className="main">
            <img id="zoom" src={`${image}`} alt="Imagen del producto"/>
            </div>
        </div>

        <div className="right">
            <span>Home/T-shirt</span>
            <h2>{title}</h2>
            <div className="price">${precio}
            </div>
        </div>
    </div>
  )
}
