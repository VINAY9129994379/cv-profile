import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <div className='navbar'>
             <div className='logo'>
                        <Link to="/" className='navlink'>Home</Link>
                    </div>
                <ul className='navulist'>
                   
                    <li className='navlist'>
                        <Link to="/resume" className='navlink'>Resume |</Link>
                    </li>
                    <li className='navlist'>
                        <Link to="/project" className='navlink'>Project |</Link>
                    </li>
                    <li className='navlist'>
                        <Link to="/contact" className='navlink'>Contact |</Link>
                    </li>
                </ul>

                </div>
  );
}

export default Navbar;
