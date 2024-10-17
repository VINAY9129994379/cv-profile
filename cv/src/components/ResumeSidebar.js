import React from 'react';
import './ResumeSidebar.css';
import vinayImage from '../assets/vinayImage.jpg';

function ResumeSidebar() {
  return (
    <div className='Rsidebar'>
      <div className='resumeContainer'>
        <div className='profilePic'>
          <img 
            src={vinayImage} 
            alt=" Vinay Profile"
          />
        </div>
        <div className='ContactResume'>
          <h1>Contact</h1>
          <hr/>
          <div className='infoResume'>
            <h3>Phone</h3>
            <span>+91 9129994379</span>
          </div>
          <div className='infoResume'>
            <h3>Email</h3>
            <span>vinay2272001@gmail.com</span>
          </div>
          <div className='infoResume'>
            <h3>Address</h3>
            <span>Mohali, Punjab</span>
          </div>
        </div>
        <div className='educationinfoREsume'>
          <h1>Education</h1>
          <hr/>
          <div className='educationinfo'>
            <span className='year'>2021-2024</span>
            <h5 className='degree'>BCA</h5>
            <h4 className='college'>Chandigarh Group of Colleges</h4>
          </div>
          <div className='educationinfo'>
            <span className='year'>2018-2020</span>
            <h5 className='degree'>12th</h5>
            <h4 className='college'>Janta Inter College, Ratnupur, Jaunpur</h4>
          </div>
        </div>
        <br/>
        <div className='skillsinfo'>
          <h1>Skills</h1>
          <hr/>
          <h3>Frontend Developer</h3>
          <h3>Backend Developer</h3>
        </div>
        <br/>
        <div className='skillLanguage'>
          <h2>Language</h2>
          <h3>English</h3>
          <h3>Hindi</h3>
        </div>
      </div>
    </div>
  );
}

export default ResumeSidebar;
