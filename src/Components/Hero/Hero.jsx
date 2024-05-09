import React from 'react'
import './Hero.css'
import profile_img from '../../assets/profile_img.svg'

export default function Hero() {
    return (
        <div className='hero'>
            <img src={profile_img} alt="profile" />
            <h1><span>I'm Alex Nennett, </span>frontend developer</h1>
            <p>I'm a junior fontend developer</p>
            <div className="hero-action">
                <div className="hero-connect">Connect with me</div>
                <div className="hero-resume">My Resume</div>
            </div>
        </div>
    )
}
