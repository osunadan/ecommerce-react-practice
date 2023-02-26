import React from 'react'

function SecundarySection({obj, posicion}) {
  return (
    <div className={`col ${obj.class}`}>
        <img src={`${obj.image}`} alt="" />
        <h3>{obj.title}
         {posicion === 2 ? <span>Discover More:</span> : ""}
        </h3>
    </div>
  )
}

export default SecundarySection