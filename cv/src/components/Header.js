import React from 'react';
import './header.css';
import vinayImage from '../assets/vinayImage.jpg';  // Adjust the path based on the actual location of the image
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div className='header'>
      <div className='pic'>
        <img src={vinayImage} alt="Vinay's profile" />
      </div>
      <div className='aboutp'> 
        <div className='aoutProfile'>
          <h4>A BIT ABOUT ME</h4>
          <p className='para'> 
            <br/>
            I'm a mern stack developer.<br/>
            as a fresher i have done many projects in react js and node js<br/> like traveling app,zomato app,blogging web. <br/>
            so i always believe in hardwork,dedication and consistency.. <br/>
          </p>
          <div className='logo'>
            <h3><Link to='/resume'>Resume</Link></h3>
            <h3> <Link to='/project'>Project</Link></h3>
            <h3><Link to='/contact'>Contact</Link></h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
