import React from 'react';
import "./header.css";
import logo from "../../assets/logo.png"

function Header() {
  return (
    <div className='header bg-img'>
      <div className='header__logo'>
        <span className='header__logo-tittle'>67Rains</span>
        <span className='header__logo-phrase'>Finally, after the 67th rain, the sun came</span>
      </div>
      <div className='header__slogan'>
        <p className='tittle'>Dress like a real <span className='tittle bg-yellow'>business man</span></p>
      </div>
    </div>
  )
}

export default Header;