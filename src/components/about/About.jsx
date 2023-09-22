import React from "react";
import "./about.css";
import ME from '../../assets/secondary.png'
import { FaAward } from "react-icons/fa";


const About = () => {
  return (
    <section className="About-general" id="about">
      <h5 className="getToNowMargin">Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Me" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>5+ Years working </small>
            </article>
           
            
          </div>

          <p>
          A Project Manager, with a solid technical, design, and IT background (over 5 years of experience in project
environment, as both project manager and assistant). 
            <br></br>
            <br></br>
            <span></span>
            <span></span>Adept at handling multiple projects simultaneously with the
highest degree of accuracy. Proficient with the major CAD software systems and adobe suite.
            <br></br>
            <br></br>
            <span></span>
            <span></span>Passionate about
functional programming, content management, and content creation. Equipped with excellent visual presentation
           <div></div>
          </p>
          <div className="lets-talk">
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
