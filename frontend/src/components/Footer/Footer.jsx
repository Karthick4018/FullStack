import React from 'react'
import './footer.css'
import shoplogo from '../Assests/logo_big.png'
import intsagram from '../Assests/instagram_icon.png'
import whatsapp from '../Assests/whatsapp_icon.png'
import pinterest from '../Assests/pintester_icon.png'

export const Footer = () => {
  return (
    <div className='outer-footer' >
        <div className="logo-foot">
            <img src={shoplogo} alt="" />
            <h1>KaRtHiK</h1>
        </div>
        <div className="foot-list">
            <ul className="foot">
                <li>Company</li>
                <li>Products</li>
                <li>Offices</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </div>
        <div className="social-icons">
            <img src={intsagram} alt="" />
            <img src={pinterest} alt="" />
            <img src={whatsapp} alt="" />
        </div>
        <hr />
        <div className="copy">
            <p>Copyright @2023-All Right Reserved</p>
        </div>
    </div>
  )
}
