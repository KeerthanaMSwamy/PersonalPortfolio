import React from 'react';
import './skills.css';
import UIDesign from '../../assets/ui-design.png';
import WebDesign from '../../assets/website-design.png';
import AppDesign from '../../assets/app-design.png';


const Skills = () => {
    return(
        <section id="skills">
            <span className="skillTitle">What I do</span>
            <span className="skillDescription">"As a software developer, I understand that effective communication 
            and teamwork skills are indispensable in our collaborative field. I work closely 
            with designers, project managers, and various stakeholders to gain a deep understanding of 
            project requirements and objectives. My ability to collaborate seamlessly and share knowledge
             ensures that our development team functions smoothly."</span>
            <div className="skillBars">
                <div className="skillbar">
                    <img src={UIDesign} alt="ui-design" className="skillBarImg" />
                    <div className="skillBarText">
                        <h2>UI/UX DESIGN</h2>
                        <p>chat gpt this</p>
                    </div>  
                </div>
            </div>

            <div className="skillBars">
                <div className="skillbar">
                    <img src={WebDesign} alt="web-design" className="skillBarImg" />
                    <div className="skillBarText">
                        <h2>WEB DESIGN</h2>
                        <p>Chat GPT this too</p>
                    </div>  
                </div>
            </div>

            <div className="skillBars">
                <div className="skillbar">
                    <img src={AppDesign} alt="app-design" className="skillBarImg" />
                    <div className="skillBarText">
                        <h2>APP DESIGN</h2>
                        <p>Chat gpt this baby</p>
                    </div>  
                </div>
            </div>
        </section>
    );
}

export default Skills;