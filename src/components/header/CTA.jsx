import React from 'react'
import CV from '../../assets/can-surer-cv3.pdf'
import { motion } from "framer-motion"

const CTA = () => {
  return (
    <motion.div
    initial={{ opacity: 0, scale: 0.5 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 4 }}
  >
    <div className='cta'>
      <a href={CV} download className="btn">Download CV</a>
      <a href="#contact" className="btn btn-primary">Let's Talk</a>
    </div>
    </motion.div>
  )
}

export default CTA;