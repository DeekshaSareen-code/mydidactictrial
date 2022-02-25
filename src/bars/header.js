import React from 'react'
import './header.css'

function Header() {
  return (
    <header className='header'>
        <div className='mid'>
        <ul>
            <li><a class="active" href="#">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href='#'>  Paintings</a> </li>
        </ul>
        
        </div>
  </header>
  )
}

export default Header