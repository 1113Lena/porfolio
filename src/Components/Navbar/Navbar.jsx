import React, { useState, useRef } from 'react'
import './Navbar.css'
import logo from '../../assets/logo-2.png'
import underline from '../../assets/nav_underline.svg'
import { NavLink, Link } from 'react-router-dom'
import menu_open from '../../assets/menu_open.svg'
import menu_close from '../../assets/menu_close.svg'



export default function Navbar() {
    const [menu, setMenu] = useState("home")
    const menuRef = useRef();

    function openMenu() {
        menuRef.current.style.right = "0"
    }

    function closeMenu() {
        menuRef.current.style.right = "-350px"
    }

    return (
        <div className='navbar'>
            <img className="logo" src={logo} alt="logo" style={{ height: "160px", width: "200px" }} />
            <img className="nav-mob-open" onClick={openMenu} src={menu_open} alt="menu_open" />
            <nav >
                <ul ref={menuRef} className='nav-menu'>
                    <img className="nav-mob-close" onClick={closeMenu} src={menu_close} alt="menu_close" />
                    <li>
                        <NavLink className="nav" to="/">Home</NavLink>
                    </li>
                    <li>
                        <NavLink className="nav" to="/about">About Me</NavLink>
                    </li>
                    <li>
                        <NavLink className="nav" to="/services">Services</NavLink>
                    </li>
                    <li>
                        <NavLink className="nav" to="/mywork">Portfolio</NavLink>
                    </li>








                    {/* <li><p>Home</p>{menu === "home" ? <img src={underline} /> : <></>}</li>
                <li><p>About Me</p>{menu === "About" ? <img src={underline} /> : <></>}</li>
                <li><p>Services</p>{menu === "services" ? <img src={underline} /> : <></>}</li>
                <li><p>Portfolio</p>{menu === "portfolio" ? <img src={underline} /> : <></>}</li>
                <li><p>Contact</p>{menu === "contact" ? <img src={underline} /> : <></>}</li> */}
                </ul>
            </nav>
            <div className="nav-connect">
                <Link style={{ textDecoration: "none", color: "white" }} to="/contact">Connect With Me</Link>
            </div>
        </div>
    )
}
