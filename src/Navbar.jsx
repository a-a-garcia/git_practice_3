import React from 'react'
import reactLogo from './assets/reactLogo.png'; 

function Navbar() {
  return (
    <nav>
      <img src={reactLogo} alt="react icon" className="logo" />
      <h2 className='nav--logo_text'>ReactFacts</h2>
      <h3 className='nav--title'>React Course - Project 1</h3>
    </nav>
  )
}

export default Navbar