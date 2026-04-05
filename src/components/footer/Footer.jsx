import React from "react";
import "./footer.css";
import { BsLinkedin } from "react-icons/bs";
import { BsArrowUp } from "react-icons/bs";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();
  const year = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer>
      <button
        onClick={scrollToTop}
        className="footer__logo"
        aria-label="Scroll to top"
        style={{ background: "none", cursor: "pointer" }}
      >
        <BsArrowUp />
      </button>

      <ul className="permalinks">
        <li>
          <button
            onClick={scrollToTop}
            style={{
              background: "none",
              cursor: "pointer",
              color: "inherit",
              font: "inherit",
              fontSize: "0.85rem",
              fontWeight: 500,
            }}
          >
            {t("home")}
          </button>
        </li>
        <li>
          <a href="#about">{t("about")}</a>
        </li>
        <li>
          <a href="#experience">{t("skills")}</a>
        </li>
        <li>
          <a href="#services">{t("services")}</a>
        </li>
        <li>
          <a href="#contact">{t("contact")}</a>
        </li>
      </ul>

      <div className="footer__socialss">
        <a
          rel="noreferrer"
          target="_blank"
          href="https://www.linkedin.com/in/cansurer/"
          aria-label="LinkedIn profile"
        >
          <BsLinkedin />
        </a>
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
