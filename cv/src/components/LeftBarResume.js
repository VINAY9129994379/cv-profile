import React from 'react'
import './LeftBarResume.css'
function LeftBarResume() {
  return (
    <div className='leftResume'>
        <div className='resumeName'>
            <h1>VINAY KUMAR</h1>
            <h5>Mern Stack Developer</h5>
            <p>i have completed my bca from chandigarh group of college where i have learnt so many skills like frontend and backend .<br/>That college give me so much confidence about how to intract with new people in life. So i have done so many poject in react js in frontend <br/>and node js project in backend like ecommerce ,zomato etc</p>
        </div>
        <br/>
        <br/>
        <div className='SkillsProject'>
            <h1>Skills & Projects as a Fresher</h1>
            <hr/>
            <div className='skillsList'>
                    <div className='skills'>
                    <h3>Frontend developer</h3>
                    <ul className='skillinfo'>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>JAVAsCRIPT</li>
                        <li>REACT JS</li>
                        <li>BOOTSTRAP</li>
                    </ul>
                    <div className='frontendProject'>
                        <h3>Frontend project</h3>
                        <ul className='frontendP'>
                            <li>Blogging website</li>
                            <li>Traveling website</li>
                            <li>Food delivery website</li>
                            <li>Real Estate website</li>
                        </ul>
                    </div>
                    </div>
                    <br/>
                    <div className='skills'>
                    <h3>Backend developer</h3>
                    <ul className='skillinfo'>
                        <li>Mongodb</li>
                        <li>Express</li>
                        <li>React Js</li>
                        <li>Node Js</li>
                    </ul>
                    <div className='BackendProject'>
                        <h3>Backend project</h3>
                        <ul className='backendp'>
                            <li>Chat application</li>
                            <li>Traveling web application</li>
                            <li>Food delivery web application</li>
                            <li>Real Estate website</li>
                        </ul>
                    </div>
                    </div>
                </div>
               
                  
                   

        </div>
    </div>
  )
}

export default LeftBarResume