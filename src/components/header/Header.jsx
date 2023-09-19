import React from "react";
import "./header.css";
import CTA from "./CTA";
import HeaderSocials from "./HeaderSocials";
import AnimationReact from "./AnimationReact";
import { motion } from "framer-motion"


const Header = () => {
  return (
    <header>

      <div className="container header__container">
        <motion.h5
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 2 }}
        >
          Hello I'm
        </motion.h5>
        <motion.h2
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 2 }}
        >
          Seyedafshin Ghiasi
        </motion.h2>
        <motion.h5
          className="text-light"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 2 }}
        >
          Product Manager
        </motion.h5>

        <CTA />
        <HeaderSocials />

        <div className="me">

          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 4 }}
          >
            <AnimationReact />
          </motion.div>
        </div>
        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
