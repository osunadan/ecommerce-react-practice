import React from 'react'
import TitleProductCards from '../product-cards/TitleProductCards'
import SecundarySectionContainer from "./SecundarySectionContainer"

function NewArrival() {
  return (
    <section className="section new-arrival">
    <TitleProductCards title={"New Arrival"} subTitle={"Latest Collection"}/>
    <SecundarySectionContainer/>
    </section>
  )
}

export default NewArrival