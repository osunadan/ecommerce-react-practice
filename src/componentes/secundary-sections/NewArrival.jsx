import React from 'react'
import TitleProductCards from '../product-cards/TitleProductCards'
import SecundarySectionContainer from "./SecundarySectionContainer"

function NewArrival() {
  return (
    <section className="section new-arrival">
    <TitleProductCards OnProducts={true} section={2}/>
    <SecundarySectionContainer/>
    </section>
  )
}

export default NewArrival