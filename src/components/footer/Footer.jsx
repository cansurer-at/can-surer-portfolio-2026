import React from 'react'
import './footer.css'
import { BsLinkedin } from 'react-icons/bs';
import { FaGithub, FaTwitter } from 'react-icons/fa';
import { BsFillArrowUpSquareFill } from 'react-icons/bs';

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
        <a rel="noreferrer" target="_blank" href="https://www.linkedin.com/in/cansurer/"><BsLinkedin/></a>
        <a  rel="noreferrer" target="_blank" href="https://github.com/cansurer-at"><FaGithub/></a>
        <a  rel="noreferrer" target="_blank" href="https://twitter.com/cansurertech"><FaTwitter/></a>
       
      </div>

      <div className="footer__copyright">
        <small>&copy; Can Surer. All rights reserved. {year}
        </small>
      </div>
    </footer>
  )
}

export default Footer