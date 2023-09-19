import React from "react";
import "./about.css";
import ME from '../../assets/secondary.png'
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";

const About = () => {
  return (
    <section id="about">
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
              <small>1+ Years working</small>
            </article>
            <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>Clients</h5>
              <small>4+ Worldwide</small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>23+ Completed</small>
            </article>
          </div>

          <p>
            I would describe myself as someone who is dedicated and reliable,
            someone who has an eye for detail.
            <br></br>
            <br></br>
            <span></span>
            <span></span>I am able to solve complex logic or other tasks related
            to the web development. I have a perfect understanding of how
            JavaScript, HTML and CSS work. I have a lot of experience working
            with up-to-date technologies especially React JS.
            <br></br>
            <br></br>
            <span></span>
            <span></span>I have solid experience in converting Figma and PSD
            files into HTML; CSS or React components as pixel-perfect. I enjoy
            creating Landing pages for your start-up.
            <br></br>
            <br></br>
            <span></span>
            <span></span>
            If you want to build a high-quality, fully responsive website please
            check my portfolio below and contact me 7/24
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
