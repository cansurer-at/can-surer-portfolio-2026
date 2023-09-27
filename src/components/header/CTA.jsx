import React from 'react'
import CV from '../../assets/Afshin_Portfolio-EN.pdf'
import { motion } from "framer-motion"
import { useTranslation } from 'react-i18next';


const CTA = () => {

  const { t } = useTranslation();

  return (
    <motion.div
    initial={{ opacity: 0, scale: 0.5 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 1 }}
  >
    <div className='cta'>
      <a href={CV} download className="btn">{t('downloadCV')}</a>
      <a href="#contact" className="btn btn-primary">{t('LetsTalkBtn')}</a>
    </div>
    </motion.div>
  )
}

export default CTA;