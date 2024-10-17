import React from 'react'
import './Footer.css'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
function Footer() {
  return (
    <div className='footer'>
        <div className='footerContainer'>
            <div className='footerRight'>
                <h2>Phone</h2>
                <p>+9129994379</p>
            </div>
            <div className='footerMidle'>
                <h2>Email</h2>
                <p>vinay2272001@gmail.com</p>
            </div> 
            <div className='footerCenter'>
                <h2>Follow Me</h2>
                <div className='icon'>
                <LinkedInIcon/>
                <TwitterIcon/>
                </div>
            </div>
            <div className=' footerLeft'>
                <h2>Phone</h2>
                <p>
             9988579962.
             Powered and secured by vinay@22</p>
            </div>

        </div>
    </div>
  )
}

export default Footer