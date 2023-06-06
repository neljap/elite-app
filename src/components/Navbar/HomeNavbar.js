import Logo from "../images/Aud.png"
import { useState, useRef } from "react"
import {Link} from "react-router-dom"
import "../../styles/HomeNavbar.style.css"
import {FaTimes, FaBars} from "react-icons/fa"

const HomeNavbar = ({children}) => {
    // const {mobile, setMobile} = useState(false)
    const NavRef = useRef()

    const showNavbar = () => {
      NavRef.current.classList.toggle("responsive_navbar")
    }

  return (
    <div className="top-container">
      <div className="navbar-container">
        <Link to="/">
          <img src={Logo} alt="img" />
        </Link>
        <nav className="nav-links" ref={NavRef}>
          <Link to="/about-us" onClick={showNavbar}>
            About
          </Link>
          <Link to="/faq" onClick={showNavbar}>
            FAQ
          </Link>
          <Link to="/contact" onClick={showNavbar}>
            Contact
          </Link>
          <button className="btn btn-primary" onClick={showNavbar}>
            Dashboard
          </button>
          <button className="icon_btn icon_close" onClick={showNavbar}>
            <FaTimes size={23} color="white" />
          </button>
        </nav>
        <button className="icon_btn" onClick={showNavbar}>
          <FaBars size={23} color="white" />
        </button>
      </div>
      <div>{children}</div>
    </div>
  );
}

export default HomeNavbar
