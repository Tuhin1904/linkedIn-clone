 import "./Home.css"
import Left from "./Left"
import Right from "./Right"
import Main from "./Main"
import React from 'react'

function Home() {
  return (
    <div class="homeContainer">
      <div className="topHome">
        <h4 ><a>Want to get Hired?</a></h4>
        <h5>Keep working up and stay updated</h5>
      </div>
      <div className="Layout">
        <Left/>
        <Main/>
        <Right/>
      </div>
    </div>
  )
}

export default Home