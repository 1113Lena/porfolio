import React from 'react'
import './AppLayout.css'
/* import profile_img from '../assets/profile_img.svg' */
import profile_img from '../assets/meng li.jpg'

export default function AppLayout() {
    return (
        <div className='app'>
            <img src={profile_img} alt="profile" />
            <div className='app-info'>
                <h1><span>I'm Lena Li, </span>Frontend Developer</h1>

                <ul>
                    <li>Proficiency in HTML, CSS, and JavaScript.</li>
                    <li>Strong understanding of how WordPress works, including themes, plugins, and core functionality.</li>
                    <li>Knowledge of front end frameworks such as React.</li>
                    <li>Understanding of responsive design.</li>
                    <li>Problem-solving and debugging skills. principles and techniques.</li>
                    <li>Effective communication and teamwork skills.</li>






                </ul>
            </div>
        </div>

    )
}
