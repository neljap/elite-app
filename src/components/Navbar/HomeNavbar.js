import Logo from "../images/Aud.png"
import { useState } from "react"
import {Link} from "react-router-dom"
import "../../styles/HomeNavbar.style.css"
import {FaTimes, FaBars} from "react-icons/fa"

const HomeNavbar = ({children}) => {
    // const {mobile, setMobile} = useState(false)

  return (
    <div className="top-container">
      <div className="navbar-container">
        <Link to="/">
          <img src={Logo} alt="img" />
        </Link>
        <nav className= "nav-links">
          <Link to="/about-us">About</Link>
          <Link to="/faq">FAQ</Link>
          <Link to="/contact">Contact</Link>
          
        </nav>
        <div >
          <button className="btn btn-primary">Dashboard</button>
        </div>
      </div>
      <div>{children}</div>
    </div>
  );
}

export default HomeNavbar
