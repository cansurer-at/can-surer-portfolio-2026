import React from "react";
import "./header.css";
import CTA from "./CTA";
import HeaderSocials from "./HeaderSocials";
import AnimationReact from "./AnimationReact";
import { motion } from "framer-motion"
import HeaderLanguages from "./HeaderLanguages";
import { useTranslation } from 'react-i18next';

const Header = () => {
  const { t } = useTranslation(); // Use useTranslation hook to access translations

  return (
    <header>
      <div className="container header__container">
        <motion.h5
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          {t('hello')} I'm
        </motion.h5>
        <motion.h2
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          {t('name')} {/* Use t('name') to get translation */}
        </motion.h2>
        <motion.h5
          className="text-light"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          {t('role')} {/* Use t('role') to get translation */}
        </motion.h5>

        <CTA />
        <HeaderSocials />
        <HeaderLanguages />

        <div className="me">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 2 }}
          >
            <AnimationReact />
          </motion.div>
        </div>
        
      </div>
    </header>
  );
};

export default Header;
