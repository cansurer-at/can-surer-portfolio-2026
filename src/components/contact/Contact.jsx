import "./contact.css";
import { MdOutlineMail } from "react-icons/md";
import React, { useState } from "react";

const Contact = () => {

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineMail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>afshinghiasi@yahoo.com</h5>
            <a 
            target="_top"
            href="mailto:afshinghiasi@yahoo.com" rel="noreferrer">Send a message</a>
          </article>
        </div>
  
      </div>
    </section>
  );
};

export default Contact;
