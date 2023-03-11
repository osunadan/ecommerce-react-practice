import React from 'react'

export default function ItemDetail({title, image, precio}) {
  return (
    <div className="row container">
        <div className="col col-1 d-flex">
            <img src={`${image}`} alt="" />
        </div>
        <div className="col col-2 d-flex">
            <h2>{title}</h2>
            <p>${precio}</p>
        </div>
    </div>
  )
}
