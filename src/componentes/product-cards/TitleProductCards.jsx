import {React, useState} from 'react'

function TitleProductCards({ OnTop }) {
return (
        <div className="title">
            <span className={`${OnTop ? "" : "hidden"}`}>COLLECTION</span>
            <h2>{OnTop ? "Our Top Collection" : "Oferta Flash - 24h"}</h2>
        </div>
  )
}

export default TitleProductCards