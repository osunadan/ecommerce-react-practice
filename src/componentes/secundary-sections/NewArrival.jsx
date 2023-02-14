import React from 'react'
import TitleProductCards from '../product-cards/TitleProductCards'

function NewArrival() {
  return (
    <section className="section new-arrival">
    <TitleProductCards OnProducts={true} section={2}/>
    </section>
  )
}

export default NewArrival