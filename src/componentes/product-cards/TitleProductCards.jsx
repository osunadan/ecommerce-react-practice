import {React, useState} from 'react'

function TitleProductCards({ OnProducts, section }) {
return (
        <div className="title">
            <span className={`${OnProducts ? "show" : "hidden"}`}>{section === 2 ? "New Arrival" : "COLLECTION"}</span>
            <h2>{OnProducts ? "Our Top Collection" : "Oferta Flash - 24h"}</h2>
        </div>
  )
}

export default TitleProductCards