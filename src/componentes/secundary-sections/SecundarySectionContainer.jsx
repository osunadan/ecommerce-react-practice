import {React} from 'react'
import SegundarySection from "./SecundarySection"

function SecundarySectionContainer() {

    const columna = [
    {
        image: "../assets/poster-1.png",
        class: "col-1",
        title: "2021 Trends Women’s Smart Skirt"
    }, 
    {
        image: "../assets/poster-2.png",
        class: "col-2",
        title: "2021 Trends Women’s Smart Skirt"
    }, 
    {
        image: "../assets/poster-3.png",
        class: "col-3",
        title: "2021 Trends Women’s Smart Skirt"
    }
]

  return (
    <div className='row container'>
        {columna.map((obj, index) => {
            return (<SegundarySection key={obj.class} obj={obj} posicion={index}/>)})}
    </div>
  )
}

export default SecundarySectionContainer