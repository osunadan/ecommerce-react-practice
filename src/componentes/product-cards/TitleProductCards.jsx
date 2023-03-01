import {React} from 'react'

function TitleProductCards({ title, subTitle }) {

return (
        <div className="title">
            <span>{title}</span>
            <h2>{subTitle}</h2>
        </div>
  )
}

export default TitleProductCards;