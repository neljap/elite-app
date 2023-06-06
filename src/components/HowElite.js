import React from 'react'
import {FaTimes} from "react-icons/fa"
import { howData } from '../utils/Data'
import "../styles/HowElite.style.css"

const HowElite = () => {
  return (
    <div className='howElite-main'>
      {howData.map((item) => {
        return (
          <div className="howElite-container" key={item.id}>
            <div className="how-top-icon">
              <div className="how-icon">
                <FaTimes color="white" size={28} />
              </div>
            </div>

            <div className="how-details">
              <h5 className="font-bold">{item.title}</h5>
              <p>
                {item.text}
              </p>
              <div className="how-btn-no">
                <p className="text-white font-bold">{item.id}</p>
              </div>
            </div>
          </div>
        );
      })}
      
    </div>
  );
}

export default HowElite