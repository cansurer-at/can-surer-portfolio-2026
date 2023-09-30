

import React from "react";
import Header from "./components/header/Header";
import Nav from "./components/nav/Nav";
import About from "./components/about/About";
import Experience from "./components/experience/Experience";


import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import Services from "./components/services/Services";
import { motion } from "framer-motion"

import enTranslation from './locales/en.json';
import deTranslation from './locales/de.json';

import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';



i18n
  .use(initReactI18next) // Initialize react-i18next
  .init({
    resources: {
      en: {
        translation: enTranslation,
      },
      de: {
        translation: deTranslation,
      },
    },
    lng: 'en', // Set the default language to English
    fallbackLng: 'en', // Fallback language if a translation is missing
    interpolation: {
      escapeValue: false, // React already escapes by default
    },
  });

const App = () => {

  
  return (
    <>
      <Header />
      <Nav />
      <About />
      <Experience />
      <Services />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
