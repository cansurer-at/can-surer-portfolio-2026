import React from "react";
import "./about.css";
import ME from '../../assets/secondary.png'
import { FaAward } from "react-icons/fa";
import { useTranslation } from 'react-i18next'; // Import useTranslation hook

const About = () => {
  const { t } = useTranslation(); // Use useTranslation hook to access translations

  return (
    <section className="About-general" id="about">
      <h5 className="getToNowMargin">{t('getToKnow')}</h5>
      <h2>{t('aboutMe')}</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt={t('aboutMeAltText')} />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>{t('experience')}</h5>
              <small>{t('experienceYears')}</small>
            </article>
            {/* Add other cards as needed */}
          </div>

          <p>
            {t('projectManagerIntro')}
            <br />
            <br />
            {t('projectManagerSkills')}
            <br />
            <br />
            {t('projectManagerPassion')}
            <div></div>
          </p>
          <div className="lets-talk">
            <a href="#contact" className="btn btn-primary">
              {t('letsTalkBtn')}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
