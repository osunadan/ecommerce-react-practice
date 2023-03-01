import React from 'react'

export default function Highlight({icon, title, description}) {
  return (
        <div className="col d-flex">
            <div className="icon">
            {icon}
            </div>
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
  )
}
