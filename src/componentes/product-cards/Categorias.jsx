import {React, useState} from 'react'
import {Link} from 'react-router-dom';

function Categorias({ categorias }) {
const [activeIndex, setActiveIndex] = useState(null);

const handleClick = (index) => {
    setActiveIndex(index);
}

  return (
  <div className='filters d-flex'>
      <Link to={"/"} className={`${activeIndex === null ? "active" : ""}`} onClick={() => handleClick(null)}>All</Link>
      {categorias.map((cat, index) => {
					return (
					<Link key={cat} to={`/category/${cat}`} className={`${activeIndex === index ? "active" : ""}`} onClick={()=> handleClick(index)}>{cat}</Link>
					);
				})}
  </div>
  )
}

export default Categorias