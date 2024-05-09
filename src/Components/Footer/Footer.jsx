
import './Footer.css'
import footer_logo from '../../assets/logo-2.png'
import user_icon from '../../assets/user_icon.svg'
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { Link } from 'react-router-dom';




export default function Footer() {



    return (
        <div className='footer'>
            <div className="footer-top">
                <div className="footer-top-left">
                    <img className="logo2" src={footer_logo} alt="footer_logo" style={{ height: "160px", width: "200px", marginTop: "80px" }} />

                </div>
                <div className="footer-top-right">
                    <div className="footer-email-input">
                        <img src={user_icon} alt="user_icon " />
                        <input type="email" placeholder='Enter you email' />
                    </div>
                    <div className="footer-subscribe">Subscribe</div>
                </div>
            </div>
            <hr />
            <div className="footer-bottom">
                <p className='footer-bottom-left'> &copy; 2024 Lena Li.All rights reserved.</p>
                <div className='social-icon'>
                    <Link to="https://www.facebook.com">
                        <FaFacebook className='icon' />
                    </Link>
                    <Link to="https://www.linkedin.com/in/lenamengli/">
                        <FaLinkedin className='icon' />
                    </Link>
                    <Link to="https://github.com/1113Lena">
                        <FaGithub className='icon' />
                    </Link>


                </div>
                <div className="footer-bottom-right">
                    <p>Term of Services</p>

                    <p>Privacy Policy</p>
                    <p>Connect with me</p>
                </div>
            </div>

        </div >
    )
}
