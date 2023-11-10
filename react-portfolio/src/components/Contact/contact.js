import React from 'react';
import './contact.css';
import Walmart from '../../assets/walmart.png';
import Adobe from '../../assets/adobe.png';
import Microsoft from '../../assets/microsoft.png';
import Facebook from '../../assets/facebook.png';
import Twitter from '../../assets/twitter.png';

function Contact() {
    return (
        <section id="contactPage">
            <div id="clients"> 
            <h1 className="clientPageTitle">My Clients</h1>
            <p className="clientDesc">
                I have had the oppurtunity to have worked with them  
            </p>
            <div className="clientImgs">
                <img src={Walmart} alt="" className="clientImg" />
                <img src={Adobe} alt="" className="clientImg" />
                <img src={Microsoft} alt="" className="clientImg" />
                <img src={Facebook} alt="" className="clientImg" />
                
            </div>
            </div>
            <div id="contact">
                <h1 className="contactPageTitle">Contact Me</h1>
                <span className="contactDesc">Please fill this out to get in touch with me</span>
                <form className="contactForm">
                    <input type="text" className="name" placeholder='your name' />
                    <input type="email" className="email" placeholder='your email' />
                    <textarea className="msg" name='message' rows="5" placeholder='your message'> </textarea>
                    <button type="submit" value="Send" className="submitBtn">submit</button>
                    <div className="links">
                        <img src={Twitter} alt="Twitter" className="link" />
                        <img src={Twitter} alt="Instagram" className="link" />
                        <img src={Twitter} alt="LinkedIn" className="link" />
                        
                    </div>
                </form>
            </div>
        </section>
    )
    }

    export default Contact