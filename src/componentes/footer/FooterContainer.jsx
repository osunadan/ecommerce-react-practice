import React from 'react'
import FooterIcon from './FooterIcon'
import FooterLinksCol from './FooterLinksCol'

export default function FooterContainer() {
  return (
    <footer className="footer">
        <div className="row container">
            <div className="col">
                <div className="logo d-flex">
                    <img src="../../src/assets/Siete.svg" alt="" />
                </div>
                <p>Lorem ispum is a placeholder text <br /> commonly used as a free text.</p>
                <div className="icons d-flex">
                    <FooterIcon icon={<box-icon type='logo' name='twitter' color={"#f7f7f7"}></box-icon>}/>
                    <FooterIcon icon={<box-icon name='youtube' type='logo'  color={"#f7f7f7"}></box-icon>}/>
                    <FooterIcon icon={<box-icon name='instagram' type='logo'  color={"#f7f7f7"}></box-icon>}/>
                </div>
                <p> Copyrights 2023<br/>
                    @osuna_dan
                </p>
            </div>
            <div className="col">
                <FooterLinksCol title={"Product"} enlace1={"Download"} enlace2={"Pricing"} enlace3={"Locations"} enlace4={"Server"} enlace5={"Countries"} />
                <FooterLinksCol title={"Category"} enlace1={"Men"} enlace2={"Women"} enlace3={"Kids"} enlace4={"Best Seller"} enlace5={"New Arrivals"} />
                <FooterLinksCol title={"My Account"} enlace1={"My Account"} enlace2={"Discount"} enlace3={"Returns"} enlace4={"Order History"} enlace5={"Order Tracking"} />
                <FooterLinksCol contact={true} title={"Contact Us"} enlace1={"123 Street Trafford, London, UK"} enlace2={"info@sitename.com"} enlace3={"+456 789 789 001"} />
            </div>
        </div>
    </footer>
  )
}
