import {React, useState, useEffect} from 'react'

function TitleProductCards({ OnProducts, section }) {
const [subTitle, setSubTitle] = useState("");

useEffect(()=>{
    if (section === 1){
        setSubTitle("Our Top Collection")
    } if (section === 2){
        setSubTitle("Latest Collection")
    }
})

return (
        <div className="title">
            <span className={`${OnProducts ? "show" : "hidden"}`}>{section === 2 ? "New Arrival" : "COLLECTION"}</span>
            <h2>{subTitle}</h2>
        </div>
  )
}

export default TitleProductCards