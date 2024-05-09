import React from 'react'
import Navbar from './Navbar/Navbar'
import AboutMe from './AboutMe/AboutMe'
import Hero from './Hero/Hero'
import Services from './Services/Services'
import MyWork from './MyWork/MyWork'
import Contact from './Contact/Contact'
import Footer from './Footer/Footer'
import AppLayout from './AppLayout'

export default function Home() {
    return (
        <div>
            <Navbar />
            {/*  <Hero />
            <AboutMe />
            <Services />
            <MyWork />
            <Contact /> */}
            <AppLayout />
            <Footer />

        </div>
    )
}
