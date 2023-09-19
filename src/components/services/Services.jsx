import React from "react";
import "./services.css";
import { BiCheck } from "react-icons/bi";

const Services = () => {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>


      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Creating full stack websites with React JS</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Customizing Web Applications from scratch.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Executing fully responsive high quality websites.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Optimazing basic SEO and mobile friendly structure.</p>
            </li>

            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Adding/Removing features to existing Web Applications.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Implementing javascript Libraries/npm installation.
              </p>
            </li>
          </ul>
        </article>
        {/* END OF UI/UX  */}
        <article className="service">
          <div className="service__head">
            <h3>Single Landing Page</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Creating Landing Page for your enterprise.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Responsive design for all devices.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Applying pixel-perfect UI and sharing source code.</p>
            </li>

            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Converting your PDF or Figma files into React
                
              </p>
            </li>
          </ul>
        </article>
        {/* END OF WEB DEVELOPMENT  */}
        {/* <article className="service">
          <div className="service__head">
            <h3>Content Creation</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Lorem, ipsum dolor sit amet consectetur elit.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Lorem, ipsum dolor sit amet consectetur elit.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Lorem, ipsum dolor sit amet consectetur elit.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Lorem, ipsum dolor sit amet consectetur elit.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Lorem, ipsum dolor sit amet consectetur elit.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Lorem, ipsum dolor sit amet consectetur elit.</p>
            </li>
            
          </ul>
        </article>
        END OF Content Creation  */}
      </div>
    </section>
  );
};

export default Services;
