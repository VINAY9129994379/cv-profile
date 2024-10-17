import React from 'react'
import './MailList.css'
function MailList() {
  return (
    <div className='mailList'>
        <h1 className='mailTitle'> save time, save money!</h1>
        <span className='mailDesc'>sign up and we will send</span>
        <div className='mailInputContainer'>
            <input type="text"  placeholder='your email...' />
            <button>subscribe</button>
        </div>
    </div>
  )
}

export default MailList