import React, {useRef} from 'react'
import Logo from "../images/Aud.png"
import { Link } from 'react-router-dom';
import "../../styles/HomeNavbar.style.css"
import {FaTimes, FaBars} from "react-icons/fa"

const DashboardNavbar = ({children}) => {
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
          <Link to="/user/dashboard" onClick={showNavbar}>
            Dashboard
          </Link>
          <Link to="/user/dashboard" onClick={showNavbar}>
            Investment
          </Link>
          <Link to="/faq" onClick={showNavbar}>
            Deposit
          </Link>
          <Link to="/contact" onClick={showNavbar}>
            Withdraw
          </Link>
          <Link to="/contact" onClick={showNavbar}>
            Transaction
          </Link>
          <Link to="/contact" onClick={showNavbar}>
            UserName
          </Link>
          <Link to="/sign-in" onClick={showNavbar}>
            <button className="btn btn-danger">Log Out</button>
          </Link>
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

export default DashboardNavbar