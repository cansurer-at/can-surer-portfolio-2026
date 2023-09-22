import React from 'react'
import './footer.css'
import { BsLinkedin } from 'react-icons/bs';

import { BsFillArrowUpSquareFill } from 'react-icons/bs';

import { AiOutlineYoutube } from "react-icons/ai";


const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer>
      <a href="#" className='footer__logo' rel="noreferrer"><BsFillArrowUpSquareFill/></a>

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socialss">
        <a rel="noreferrer" target="_blank" href="https://www.linkedin.com/in/afshin-ghiasi/"><BsLinkedin/></a>
        
        <a href="https://www.youtube.com/@mesomeric2584" rel="noreferrer" target="_blank">
        <AiOutlineYoutube />
      </a>
       
      </div>

      <div className="footer__copyright">
        <small>&copy; Seyedafshin Ghiasi. All rights reserved. {year}
        </small>
      </div>
    </footer>
  )
}

export default Footer