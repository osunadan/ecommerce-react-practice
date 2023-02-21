import {React} from 'react'
import SegundarySection from "./SecundarySection"

function SecundarySectionContainer() {

    const columna = ["col-1", "col-2", "col-3", "col-4"]

  return (
    <div className='row container'>
        {columna.map((clase) => {
            return (<SegundarySection clase={clase} />)})}
    </div>
  )
}

export default SecundarySectionContainer