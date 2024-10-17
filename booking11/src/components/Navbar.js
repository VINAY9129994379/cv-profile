import React from 'react'
import './Navbar.css';
import { Link } from 'react-router-dom';
function Navbar() {
  return (
    <div className="navbar">
        <div className="navContainer" >
          <Link to='/' style={{ textDecoration:'none'}}>
            <span className="logo">Booking11</span>
            </Link>
            <div classname ="navItems">
                <button className="navButton">Register</button>
                <button className="navButton">Login</button>
            </div>
         
        </div>
    </div>
  )
}

export default Navbar