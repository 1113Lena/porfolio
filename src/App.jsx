import { useState } from 'react'
import Hero from './Components/Hero/Hero'
import AboutMe from './Components/AboutMe/AboutMe'
import Services from './Components/Services/Services'
import MyWork from './Components/MyWork/MyWork'
import Contact from './Components/Contact/Contact'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Components/Home'
import Work from './Components/MyWork/Work'


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="Hero" element={<Hero />} />
        <Route path="About" element={<AboutMe />} />
        <Route path="services" element={<Services />} />
        <Route path="mywork" element={<MyWork />} />
        <Route path="mywork/:id" element={<Work />} />

        <Route path="contact" element={<Contact />} />


      </Routes>


    </BrowserRouter>
  )
}

export default App
