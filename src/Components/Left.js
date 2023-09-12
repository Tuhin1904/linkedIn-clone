import React from 'react'
import "./Left.css"
import widget from "../images/widget-icon.svg"
import item from "../images/item-icon.svg"
import plus from "../images/plus-icon.svg"

function Left() {
  return (
    <div className='leftContainer'>
        <div className='artCard'>
                <div className='userInfo'>
                    <div className='cardBG'></div>
                    <a>
                        <div className='photoo'></div>
                        <a className='link1'>Welcome , there!</a>
                    </a>
                    <a className='Welcome'>
                            <div>Add a photo</div>                 
                    </a>
                </div>
                <div className='widget'>
                    <a>
                    <div>
                        <span>Connections</span>
                        <span>Grow your network</span>
                    </div>   
                    <img src={widget} alt="add connections" /> 
                    </a>
                </div>
                <div className="item">
                    <span>
                        <img src={item} alt="widget" />
                        My Items
                    </span>
                </div>
        </div>
        <div className="communityC">
            <a>
                <span>Groups</span>
            </a>
            <a>
                <span>
                    Events
                    <img src={plus} alt="" />
                </span>
            </a>
            <a>
            <span>Follow Hashtags</span>
            </a>
            <a>
            <span>Discover more</span>
            </a>
        </div>
    </div>
  )
}

export default Left