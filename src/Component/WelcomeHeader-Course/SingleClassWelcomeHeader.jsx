import React from 'react'
import Background from "./images/CourseWelcomeImage.png";
import './style.css'

function SingleClassWelcomeHeader(props) {

    return (
            <div className='welcome-container-course'>
                <div className='landing-background-course'>
                    <div className='welcomebackground-surface-course '>
                        <h2 className='main-header-course '>{props?.data?.name}</h2>
                        <h4 className='sub-header-course '>{props?.data?.description}</h4>

                    </div>
                    <div className='welcomebackground-course1'>
                        <img src={Background} className='welcomebackground-course'/>
                        <div className="button1-position">
                            <button className="button1">Sign Up Here</button>
                        </div>
                    </div >



                </div>

            </div>

    )
}

export default SingleClassWelcomeHeader
