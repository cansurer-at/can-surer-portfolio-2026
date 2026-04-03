import React from "react";
import "./footer.css";
import { BsLinkedin } from "react-icons/bs";
import { BsFillArrowUpSquareFill } from "react-icons/bs";
// import { AiOutlineYoutube } from "react-icons/ai";
import { useTranslation } from "react-i18next"; // Import useTranslation from react-i18next

const Footer = () => {
  const { t } = useTranslation(); // Use useTranslation hook to access translations
  const year = new Date().getFullYear();

  return (
    <footer>
      <a href="#" className="footer__logo" rel="noreferrer">
        <BsFillArrowUpSquareFill />
      </a>

      <ul className="permalinks">
        <p>
          <a href="#">{t("home")}</a>
        </p>
        <p>
          <a href="#about">{t("about")}</a>
        </p>
        <p>
          <a href="#experience">{t("experience")}</a>
        </p>
        <p>
          <a href="#services">{t("services")}</a>
        </p>
        
      
        <p>
          <a href="#contact">{t("contact")}</a>
        </p>
      </ul>

      <div className="footer__socialss">
        <a
          rel="noreferrer"
          target="_blank"
          href="https://www.linkedin.com/in/cansurer/"
        >
          <BsLinkedin />
        </a>

        {/* <a
          href="https://www.youtube.com/@mesomeric2584"
          rel="noreferrer"
          target="_blank"
        >
          <AiOutlineYoutube />
        </a> */}
      </div>

      <div className="footer__copyright">
        <small>
          &copy; {t("allRightsReserved")} {year}
        </small>
      </div>
    </footer>
  );
};

export default Footer;
