import React from 'react'
import "./navbar.css"

function Navbar() {
  return (
    <div className='navbar'>
      <div className='navbar__links'>
        <a href="">Home</a>
        <a href="">About</a>
        <a href="">Shop</a>
      </div>
      <div className='navbar__logo'>
        67Rains
      </div>
    </div>
  )
}

export default Navbar;
