// import styled from 'styled-components'
import React from 'react';
import logo from "../images/login-logo.svg"
import './login.css'
import hero from "../images/login-hero.svg"
import google from "../images/google.svg"

function Login(props) {
  return (
    <>
    <div className='container'>
      <div className='navBar'>
        <a href='/'>
          <img src={logo} alt='LinkedIn logo'/>
        </a>
        <div>
        <button className='join'>Join now </button>
        <button id="sign">Sign in</button>
        </div>
      </div>
      <section className='newSec'>
        <div id='hero'>
          <h1>Welcome to the community!</h1>
          <img src={hero} alt="Body "/>
        </div>
        <form>
        <div className='google'>
           <img src={google} alt="google logo"/>
           Sign in with Google
        </div>   
        </form>
      </section>
    </div>
    </>
  )
}



export default Login