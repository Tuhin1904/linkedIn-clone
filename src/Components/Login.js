// import styled from 'styled-components'
import React from 'react';
import logo from "../images/login-logo.svg"
import './login.css'

function Login(props) {
  return (
    <>
    <div className='container'>
      <div className='navBar'>
        <a href='/'>
          <img src={logo} alt='LinkedIn logo'/>
        </a>
        <button className='join'>Join now </button>
      </div>
    </div>
    </>
  )
}



export default Login