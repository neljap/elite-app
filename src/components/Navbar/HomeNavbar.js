import Logo from "../images/Aud.png"
import { useState } from "react"
import {Link} from "react-router-dom"
import "../../styles/HomeNavbar.style.css"
import {FaTimes, FaBars} from "react-icons/fa"

const HomeNavbar = ({children}) => {
    const {isMobile, setIsMobile} = useState(false)

  return (
    <div className="top-container">
      <div className="navbar-container">
        <Link to="/">
          <img src={Logo} alt="img" />
        </Link>
        <nav className={isMobile ? "nav-mob-links" : "nav-links"} onClick={() => setIsMobile(false)}>
          <Link to="/about-us">About</Link>
          <Link to="/faq">FAQ</Link>
          <Link to="/contact">Contact</Link>
          <div className={isMobile ? "btn-mob" : "btn-desk"}>
            <button className="btn btn-primary">Dashboard</button>
          </div>
        </nav>
        <div className={isMobile ? "btn-desk" : "btn-mob"}>
          <button className="btn btn-primary">Dashboard</button>
        </div>
        <button className={isMobile ? "icon-btn-mob" : "icon-btn-desk"} onClick={() => setIsMobile(!isMobile)}>
           {isMobile ? (<FaTimes color="white" size={25} />) : (<FaBars color="white" size={25} />)} 
        </button>
        
      </div>
      <div>{children}</div>
    </div>
  );
}

export default HomeNavbar
