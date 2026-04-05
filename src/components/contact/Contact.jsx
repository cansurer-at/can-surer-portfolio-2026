import "./contact.css";
import { MdOutlineMail } from "react-icons/md";
import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const Contact = () => {
  const { t } = useTranslation();

  return (
    <section id="contact">
      <h5>{t("getInTouch")}</h5>
      <h2>{t("contactMe")}</h2>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="container contact__container"
      >
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineMail className="contact__option-icon" />
            <h4>{t("email")}</h4>
            <h5>{t("emailAddress")}</h5>
            <a
              target="_top"
              href="mailto:cansurer@outlook.com"
              rel="noreferrer"
            >
              {t("sendMessage")}
            </a>
          </article>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
