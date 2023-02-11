import React from 'react'
import {Link} from 'react-router-dom';

function Categorias({ categorias }) {
  return (
  <div className='filters d-flex'>
      <Link to={"/"}>All</Link>
      {categorias.map((cat) => {
					return (
					<Link key={cat} to={`/category/${cat}`}>{cat}</Link>
					);
				})}
  </div>
  )
}

export default Categorias