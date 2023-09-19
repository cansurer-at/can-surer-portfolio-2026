
import React from 'react'
import { BsLinkedin } from 'react-icons/bs';
import { FaGithub, FaTwitter } from 'react-icons/fa';


const HeaderSocials = () => {
  return ( <div className='header__socialss'>
  
    <a href= "https://www.linkedin.com/in/cansurer/" rel="noreferrer" target="_blank"> <BsLinkedin> </BsLinkedin></a>
    <a href= "https://github.com/cansurer-at" rel="noreferrer" target="_blank" ><FaGithub /></a>      
    <a target="_blank" rel="noreferrer" href="https://twitter.com/cansurertech"><FaTwitter/></a>
    </div>
  )
}

export default HeaderSocials








