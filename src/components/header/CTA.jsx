import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

import CV_EN from '../../assets/Can-Surer-CV-EN.pdf';
import CV_DE from '../../assets/Can-Surer-CV-DE.pdf';

const CTA = () => {
  const { t, i18n } = useTranslation();

  // Define the CV link based on the current language
  const cvLink = i18n.language === 'de' ? CV_DE : CV_EN;

  return (
    <motion.div
    style={{"marginTop":"170px"}}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1 }}
    >
      <div className='cta'>
        <a href={cvLink} download className="btn">
          {t('downloadCV')}
        </a>
        <a href="#contact" className="btn btn-primary">
          {t('LetsTalkBtn')}
        </a>
      </div>
    </motion.div>
  );
};

export default CTA;
