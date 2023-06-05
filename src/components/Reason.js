import React from 'react'
import {FaTimes} from "react-icons/fa"
import "../styles/Reason.styles.css"

const Reason = () => {
  return (
    <div className='reason-main-container'>
      <div className='reason-top'>
        <h2>Reason to Choose Us</h2>
        <p>Why Choose Us? Here are some reasons</p>
      </div>
      <div className='reason-content-container'>
        <div className='reason-content'>
            <FaTimes />
            <h5>WORLD COVERAGE</h5>
            <p>Providing Service around the world</p>
        </div>
      </div>
    </div>
  )
}

export default Reason
