import React from 'react'
import './AboutMe.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import profile_img from '../../assets/bg1.jpg'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'

export default function AboutMe() {
    return (
        <>
            <Navbar />
            <div className='about'>
                <div className="about-title">
                    <h1>About Me</h1>
                    <img src={theme_pattern} alt="theme" />
                </div>
                <div className="about-section">
                    <div className="about-left">
                        <img src={profile_img} alt="aboutprofile" style={{ width: "350px", height: "350px" }} />
                    </div>
                    <div className="about-right">
                        <div className="about-para">
                            <p>I am a junior frontend developer</p>
                            <p>My passion for frontend development is not only reflected in my experience,but also in the enthusiasm and dedication I bring to each project.</p>
                        </div>
                        <div className="about-skills">
                            <div className="about-skill">
                                <p>HTML & CSS</p>
                                <hr style={{ width: "65%" }} />
                            </div>
                            <div className="about-skill">
                                <p>React JS</p>
                                <hr style={{ width: "60%" }} />
                            </div>
                            <div className="about-skill">
                                <p>Javascript</p>
                                <hr style={{ width: "70%" }} />
                            </div>
                            <div className="about-skill">
                                <p>WordPress</p>
                                <hr style={{ width: "55%" }} />
                            </div>

                        </div>
                    </div>
                </div>

            </div>
            <Footer />
        </>
    )
}
