import React from 'react'
import 'boxicons'

function Hamburger({show}) {

  return (
    <div type="button" className="hamburger" onClick={show}>
       <box-icon name='menu'></box-icon>
    </div>
  )
}

export default Hamburger