import React from 'react'
import {FaTimes} from "react-icons/fa"
import "../styles/HowElite.style.css"

const HowElite = () => {
  return (
    <div className='howElite-main'>
      <div className='howElite-container'>
        <div className='how-top-icon'>
            <div className='how-icon'>
                <FaTimes color='white' size={28} />
            </div> 
        </div>
        
        <div className='how-details'>
          <h5 className='font-bold'>OPEN AN ACCOUNT</h5>
          <p>Sign up for an account with your name, email and phone number</p>
          <div className='how-btn-no'>
            <p className='text-white font-bold'>1</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HowElite