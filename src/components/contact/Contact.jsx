import "./contact.css";
import { MdOutlineMail } from "react-icons/md";
import React, { useState } from "react";
import { useTranslation } from "react-i18next"; // Import useTranslation from react-i18next

const Contact = () => {
  const { t } = useTranslation(); // Use useTranslation hook to access translations

  return (
    <section id="contact">
      <h5>{t("getInTouch")}</h5>
      <h2>{t("contactMe")}</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineMail className="contact__option-icon" />
            <h4>{t("email")}</h4>
            <h5>{t("emailAddress")}</h5>
            <a
              target="_top"
              href="mailto:afshinghiasi@yahoo.com"
              rel="noreferrer"
            >
              {t("sendMessage")}
            </a>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Contact;
