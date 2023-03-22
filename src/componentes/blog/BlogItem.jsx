import React from 'react';

export default function BlogItem({title, image, description, date}) {
  return (
     <div className="col"> 
            <div className="top">
                <img src={image} alt="" />
            </div>
            <div className="bottom">
                <h3>{title}</h3>
                <h4>{description}</h4>
                <span>{date}</span>
            </div>
        </div>
  )
}
