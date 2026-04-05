import React from "react";
import "./experience.css";
import { BsPatchCheckFill } from "react-icons/bs";
import { useTranslation } from "react-i18next";

const Experience = () => {
  const { t } = useTranslation();

  const frontendSkills = [
    t("react"),
    t("typescript"),
    t("nextjs"),
    t("redux"),
    t("mobx"),
    t("moduleFederation"),
    t("tailwindCSS"),
    t("responsiveDesign"),
  ];

  const tools = [
    t("git"),
    t("docker"),
    t("aws"),
    t("cicd"),
    t("restApi"),
    t("webpack"),
  ];

  return (
    <section id="experience">
      <h5>{t("skillsHeader")}</h5>
      <h2>{t("mySkills")}</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>{t("frontendDevelopment")}</h3>
          <div className="experience__content">
            {frontendSkills.map((skill, i) => (
              <article key={i} className="experience__details">
                <BsPatchCheckFill
                  width={20}
                  height={20}
                  className="experience__details-icon"
                />
                <div>
                  <h4>{skill}</h4>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="experience__frontend">
          <h3>{t("toolsTechnologies")}</h3>
          <div className="experience__content">
            {tools.map((tool, i) => (
              <article key={i} className="experience__details">
                <BsPatchCheckFill
                  width={20}
                  height={20}
                  className="experience__details-icon"
                />
                <div>
                  <h4>{tool}</h4>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
