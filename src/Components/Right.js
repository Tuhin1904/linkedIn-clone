import React from 'react'
import "./Right.css"
import bannerImg from "../images/bannerCard.jpg"
import {FaSlackHash,FaArrowRight} from "react-icons/fa"

function Right() {
  return (
    <div className='rightContainer'>
      <div className='followR'>
        <div className="title">
          <h2>Add to your feed</h2>
        </div>
        <ul className="feedList">
          <li>
            <a>
              <div className="avatar">
              <FaSlackHash size={40}/>
              </div>
            </a>
            <div>
              <span>#LinkedIn</span>
              <button>Follow</button>
            </div>
          </li>
          <li>
            <a>
              <div className="avatar">
              <FaSlackHash size={40}/>
              </div>
            </a>
            <div>
              <span>#Video</span>
              <button>Follow</button>
            </div>
          </li>
        </ul>
        <div className="recommendation">
            View All recommendations
            <FaArrowRight size={13}/>
        </div>
        <img src="" alt="" />
      </div>
      <div className="banner">
        <img src={bannerImg} alt="" />
      </div>
    </div>
  )
}

export default Right