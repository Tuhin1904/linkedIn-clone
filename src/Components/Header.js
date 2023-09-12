import React from 'react'
import "./Header.css"
import logo from "../images/home-logo.svg"
import {FaSearch} from 'react-icons/fa'
import navhome from "../images/nav-home.svg"
import network from "../images/nav-network.svg"
import jobs from "../images/nav-jobs.svg"
import message from "../images/nav-messaging.svg"
import notification from "../images/nav-notifications.svg"
import user from "../images/user.svg"
import down from "../images/down-icon.svg"
import navwork from "../images/nav-work.svg"

function Header() {
  return (
    <div className='headerContainer'>
        <div className='headerContent'>
            <div className='logo'>
                <img src={logo} alt="logo"/>
            </div>
            <div className='search'>
                <div>
                    <input type="text" placeholder='Search'/>
                </div>
                <FaSearch className='sIcon' size={14}/>
            </div>
            <div className='Nav'>
                <ul className='navlist ' >
                    <li className="list active">
                        <a href=''><img src={navhome} alt="home"/><span>Home</span></a>
                    </li>
                    <li className='list'>
                        <a href=''><img src={network} alt="home"/><span>My Network</span></a>
                    </li>
                    <li className='list'>
                        <a href=''><img src={jobs} alt="home"/><span>Jobs</span></a>
                    </li>
                    <li className='list'>
                        <a href=''><img src={message} alt="home"/><span>Message</span></a>
                    </li>
                    <li className='list'>
                        <a href=''><img src={notification} alt="home"/><span>Notification</span></a>
                    </li>
                    <div className='user list'>
                        <a>
                            <img src={user} alt=" "/>
                            <span>Me </span>
                            <img src={down} alt=""/>
                        </a>
                        <div><a>Sign out</a></div>
                    </div>
                    <div className='work list'>
                        <a>
                            <img src={navwork} alt=""/>
                            <span>Work
                            <img src={down} alt=""/> 
                            </span>
                        </a>
                    </div>
                </ul>
            </div>
        </div>
    
    </div>
  )
}

export default Header