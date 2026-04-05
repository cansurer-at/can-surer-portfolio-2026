import React from "react";
import { useTranslation } from "react-i18next";

import CV_EN from "../../assets/Can-Surer-CV-EN.pdf";
import CV_DE from "../../assets/Can-Surer-CV-DE.pdf";

const CTA = () => {
  const { t, i18n } = useTranslation();
  const cvLink = i18n.language === "de" ? CV_DE : CV_EN;

  return (
    <div className="cta">
      <a href={cvLink} download className="btn">
        {t("downloadCV")}
      </a>
      <a href="#contact" className="btn btn-primary">
        {t("LetsTalkBtn")}
      </a>
    </div>
  );
};

export default CTA;
