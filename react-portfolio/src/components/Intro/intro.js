import React from 'react';
import './intro.css';
import bg from '../../assets/kimage.png';
import {Link} from 'react-scroll';
import btnImg from '../../assets/hireme.png';

const Intro = () => {
    return (
        <section id="intro">
            <div className="introContent">
                <span className="hello">Hello,</span>
                <span className="introText">I'm <span className="introName">Keerthana MS</span><br />Software Engineer</span>
                <p className="introPara">A passionate and enthusiastic individual looking to kickstart <br /> my career in software development. 
                This portfolio serves as <br /> a canvas for my early coding adventures, where I'm excited <br /> to share
                 the projects and skills I've been cultivating as a <br /> newcomer to the world of software development.</p>
                <Link><button className="btn"><img src={btnImg} alt="hire me" className="btnImg"/>Hire Me</button></Link>
            
            
            
            </div>
            <img src={bg} alt="bg" className="bg" />
        </section>
    )
    }


export default Intro;
