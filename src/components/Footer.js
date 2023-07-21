import React from 'react'
import Logo from "./images/Aud.png"
import "../styles/AboutSection.styles.css"

const Footer = () => {
  return (
    <div className="footer-container">
        <div className="footer-img">
          <img src={Logo} alt="logo" className="w-100" />
        </div>
        <div className="footer-txt container">
          <p className='text-center'>
            Elite Capital Trading ltd. does not offer Contracts for Difference
            to residents of certain jurisdictions including the USA, Iran and
            Canada. With regards to the FSCA authorisation, Elite Capital
            Trading ltd. provides execution services and enters into principal
            to principal transactions with its clients on Elite Capital Trading
            ltd. prices. These transactions are not traded on an exchange. CFDs
            with Elite Capital Trading ltd. are not regulated by the FAIS Act
            and intermediary services are not provided
          </p>
        </div>
        <hr style={{width: "100%", padding: "10px"}} />
    </div>
  );
}

export default Footer