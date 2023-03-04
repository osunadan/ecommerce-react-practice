import React from 'react';
import { Link } from "react-router-dom";
import FooterIcon from './FooterIcon';

export default function FooterLinksCol({contact, title, enlace1, enlace2, enlace3, enlace4, enlace5}) {
  
 if(contact){
   return(
       <div>
            <h4>{title}</h4>
    <div className="d-flex">
        <FooterIcon icon={<box-icon name='map-pin' type='solid' color={"#f7f7f7"}></box-icon>} />
        <span>{enlace1}</span>
    </div>
    <div className="d-flex">
        <FooterIcon icon={<box-icon name='envelope' color={"#f7f7f7"}></box-icon>} />
        <span>{enlace2}</span>
    </div>
    <div className="d-flex">
        <FooterIcon icon={<box-icon name='phone' type='solid' color={"#f7f7f7"}></box-icon>} />
        <span>{enlace3}</span>
    </div>
    </div>
   )}

    return (
    <div>
    <h4>{title}</h4>
                <Link href="">{enlace1}</Link>
                <Link href="">{enlace2}</Link>
                <Link href="">{enlace3}</Link>
                <Link href="">{enlace4}</Link>
                <Link href="">{enlace5}</Link>
    </div>
  )
}
