import React from 'react'
import './Resume.css'
import ResumeSidebar from '../components/ResumeSidebar'
import LeftBarResume from '../components/LeftBarResume'
function Resume() {
  return (
    <div className='resume' id="resumy">
      <ResumeSidebar/>
      <LeftBarResume/>

    </div>
  )
}

export default Resume