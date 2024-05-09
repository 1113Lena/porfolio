import React, { useState } from 'react'
import './Contact.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import mail_icon from '../../assets/mail_icon.svg'
import location_icon from '../../assets/location_icon.svg'
import call_icon from '../../assets/call_icon.svg'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'

export default function Contact() {

    const [text, setText] = useState("")
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")

    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);

        formData.append("access_key", "926c6efa-7510-40ac-ab7c-06a5567d928d");

        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);

        const res = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: json
        }).then((res) => res.json());

        if (res.success) {
            alert("Your form has been successfully submitted");
        }
        setText('');
        setEmail('');
        setMessage('')
    };






    return (
        <>
            <Navbar />
            <div className='contact'>
                <div className="contact-title">
                    <h1>Get in touch</h1>
                    <img src={theme_pattern} alt="theme_pattern " />
                </div>
                <div className="contact-section">
                    <div className="contact-left">
                        <h1>Let's talk</h1>
                        <p>I'm currently avaliable to take on new projects,so everything that you want me to work on.You can contact anytime. </p>
                        <div className="contact-details">
                            <div className="contact-detail">
                                <img src={mail_icon} alt="" />
                                <p>info@lenamengli.com</p>
                            </div>
                            <div className="contact-detail">
                                <img src={call_icon} alt="" />
                                <p>+1 123 456 7879</p>
                            </div>
                            <div className="contact-detail">
                                <img src={location_icon} alt="" />
                                <p>123 st,ON,Ca</p>
                            </div>

                        </div>

                    </div>
                    <form onSubmit={onSubmit} className='contact-right'>
                        <label htmlFor="">Your Name</label>
                        <input value={text} onChange={(e) => setText(e.target.value)} type="text" placeholder='Enter your name' name="name" />

                        <label>Your Email</label>
                        <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder='Enter your email' name="email" />

                        <label>Write your message here</label>
                        <textarea value={message} onChange={(e) => setMessage(e.target.value)} name="message" rows="8" placeholder='Enter your message'></textarea>

                        <button type="submit" className='contact-submit'>Submit Now</button>
                    </form>
                </div>

            </div>
            <Footer />
        </>
    )
}
