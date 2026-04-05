import React from "react";
import "./about.css";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { FaReact, FaGitAlt, FaDocker, FaAward, FaUsers, FaProjectDiagram } from "react-icons/fa";
import {
  SiTypescript,
  SiJavascript,
  SiNextdotjs,
  SiRedux,
  SiNodedotjs,
  SiTailwindcss,
  SiCss3,
  SiHtml5,
  SiWebpack,
} from "react-icons/si";

const techStack = [
  { icon: FaReact, name: "React", color: "#61DAFB" },
  { icon: SiTypescript, name: "TypeScript", color: "#3178C6" },
  { icon: SiJavascript, name: "JavaScript", color: "#F7DF1E" },
  { icon: SiNextdotjs, name: "Next.js", color: "#ffffff" },
  { icon: SiRedux, name: "Redux", color: "#764ABC" },
  { icon: SiNodedotjs, name: "Node.js", color: "#339933" },
  { icon: SiTailwindcss, name: "Tailwind", color: "#06B6D4" },
  { icon: SiCss3, name: "CSS3", color: "#1572B6" },
  { icon: SiHtml5, name: "HTML5", color: "#E34F26" },
  { icon: FaGitAlt, name: "Git", color: "#F05032" },
  { icon: FaDocker, name: "Docker", color: "#2496ED" },
  { icon: SiWebpack, name: "Webpack", color: "#8DD6F9" },
];

const About = () => {
  const { t } = useTranslation();

  const stats = [
    { icon: FaAward, title: t("experience"), sub: t("experienceYears") },
    { icon: FaUsers, title: t("clients"), sub: t("clientsCount") },
    { icon: FaProjectDiagram, title: t("projects"), sub: t("projectsCount") },
  ];

  return (
    <section className="About-general" id="about">
      <h5>{t("getToKnow")}</h5>
      <h2>{t("aboutMe")}</h2>

      <div className="about__container">
        {/* Tech Stack Grid */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          style={{
            borderRadius: "20px",
            padding: "clamp(1.2rem, 3vw, 2rem)",
            border: "1px solid rgba(255,255,255,0.08)",
            background: "rgba(255,255,255,0.03)",
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "clamp(0.6rem, 1.5vw, 1rem)",
            }}
          >
            {techStack.map((tech, i) => {
              const Icon = tech.icon;
              return (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, scale: 0.85 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: i * 0.03 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -4, scale: 1.05 }}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: "0.5rem",
                    padding: "clamp(0.8rem, 2vw, 1.2rem)",
                    borderRadius: "14px",
                    background: "rgba(255,255,255,0.04)",
                    cursor: "default",
                    transition: "all 300ms ease",
                  }}
                >
                  <Icon size={26} color={tech.color} />
                  <span
                    style={{
                      fontSize: "0.72rem",
                      fontWeight: 500,
                      color: "rgba(255,255,255,0.5)",
                    }}
                  >
                    {tech.name}
                  </span>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Right: Stats + Text */}
        <motion.div
          className="about__content"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          viewport={{ once: true }}
        >
          {/* Stats Cards */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "clamp(0.6rem, 1.5vw, 1rem)",
              marginBottom: "2rem",
            }}
          >
            {stats.map((stat, i) => {
              const Icon = stat.icon;
              return (
                <div
                  key={i}
                  style={{
                    borderRadius: "16px",
                    padding: "clamp(1rem, 2vw, 1.5rem)",
                    textAlign: "center",
                    border: "1px solid rgba(255,255,255,0.08)",
                    background: "rgba(255,255,255,0.03)",
                    transition: "all 300ms ease",
                  }}
                >
                  <Icon
                    style={{
                      color: "rgba(255,255,255,0.8)",
                      fontSize: "1.2rem",
                      marginBottom: "0.5rem",
                    }}
                  />
                  <h5
                    style={{
                      color: "white",
                      fontSize: "0.85rem",
                      fontWeight: 600,
                      marginBottom: "0.2rem",
                    }}
                  >
                    {stat.title}
                  </h5>
                  <small
                    style={{
                      color: "rgba(255,255,255,0.4)",
                      fontSize: "0.72rem",
                    }}
                  >
                    {stat.sub}
                  </small>
                </div>
              );
            })}
          </div>

          <p>{t("aboutIntro")}</p>
          <p>{t("aboutSpecialization")}</p>

          <div className="lets-talk">
            <a href="#contact" className="btn btn-primary">
              {t("letsTalkBtn")}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
