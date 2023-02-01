import React from 'react'
import {Link} from 'react-router-dom';

function Categorias({ categorias }) {
  return (
  <div className='filters d-flex'>
      {categorias.map((cat) => {
					return (
					<Link key={cat}>{cat}</Link>
					);
				})}
  </div>
  )
}

export default Categorias