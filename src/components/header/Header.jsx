import React, { useEffect, useState } from "react";
import "./header.css";
import CTA from "./CTA";
import HeaderSocials from "./HeaderSocials";
import AnimationReact from "./AnimationReact";
import { motion } from "framer-motion";
import HeaderLanguages from "./HeaderLanguages";
import { useTranslation } from 'react-i18next';

const Header = () => {
  const { t } = useTranslation(); // Use useTranslation hook to access translations
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 600);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <header>
      <div className="container header__container">
        {isMobile ? (
          <motion.h2
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          >
            {t('hello')}
          </motion.h2>
        ) : (
          <motion.h2
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          >
            {t('hello')}
          </motion.h2>
        )}

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
          <h2>{t('name')}</h2>
          <h5 className="text-light">{t('role')}</h5>
        </div>
      </div>
    </header>
  );
};

export default Header;
