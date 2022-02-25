import React from 'react'
import './header.css'
import {Link} from "react-router-dom";

const Header=() =>{
  return (
    <header className='header'>
        <ul>
                <li><a href='/' activeStyle={{color: "yellow"}}>Home</a></li>
                <li><a href='/about'>About</a></li>
                <li><Link to='/paintings'>Paintings</Link></li>
        </ul>
        
        
  </header>
  )
}

export default Header