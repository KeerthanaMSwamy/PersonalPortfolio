import React from 'react';
import './works.css';
import Image1 from '../../assets/portfolio-1.png';
import Image2 from '../../assets/portfolio-2.png';
import Image3 from '../../assets/portfolio-3.png';
import Image4 from '../../assets/portfolio-4.png';
import Image5 from '../../assets/portfolio-5.png';
import Image6 from '../../assets/portfolio-6.png';



const Skills = () => {
    return(
        <section id='works'>
            <h2 className="worksTitle">My Portfolio</h2>
            <span className="worksDescription">I take pride in paying attention to smallest details in my tasks.</span>
            <div className="worksImgs">
                <img src={Image1} alt="mage1" className="worksImg" />
                <img src={Image2} alt="image2" className="worksImg" />
                <img src={Image3} alt="image3" className="worksImg" />
                <img src={Image4} alt="image4" className="worksImg" />
                <img src={Image5} alt="image5" className="worksImg" />
                <img src={Image6} alt="image6" className="worksImg" />
            </div>

            <button className="worksBtn">See more</button>
        </section>
    )
}

export default Skills;