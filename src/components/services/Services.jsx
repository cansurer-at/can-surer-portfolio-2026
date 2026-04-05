import React from "react";
import "./services.css";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const Services = () => {
  const { t } = useTranslation();

  const jobs = [
    {
      role: t("avicaRole"),
      company: t("avicaCompany"),
      period: t("avicaPeriod"),
      bullets: [
        t("avicaBullet1"),
        t("avicaBullet2"),
        t("avicaBullet3"),
        t("avicaBullet4"),
        t("avicaBullet5"),
      ],
    },
    {
      role: t("sisalRole"),
      company: t("sisalCompany"),
      period: t("sisalPeriod"),
      bullets: [t("sisalBullet1"), t("sisalBullet2"), t("sisalBullet3")],
    },
    {
      role: t("tpRole"),
      company: t("tpCompany"),
      period: t("tpPeriod"),
      bullets: [t("tpBullet1"), t("tpBullet2"), t("tpBullet3")],
    },
  ];

  return (
    <section id="services">
      <h5>{t("getToKnow")}</h5>
      <h2>{t("workExperience")}</h2>

      <div style={{ maxWidth: "800px", margin: "0 auto", padding: "0 1rem" }}>
        {jobs.map((job, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            style={{
              borderRadius: "20px",
              border: "1px solid rgba(255,255,255,0.08)",
              background: "rgba(255,255,255,0.03)",
              marginBottom: "1.5rem",
              padding: "clamp(1.5rem, 3vw, 2.5rem)",
              transition: "all 300ms ease",
            }}
          >
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "space-between",
                alignItems: "flex-start",
                gap: "0.5rem",
                marginBottom: "1.2rem",
              }}
            >
              <div>
                <h3
                  style={{
                    color: "white",
                    fontSize: "clamp(1rem, 2vw, 1.15rem)",
                    fontWeight: 600,
                    margin: 0,
                    lineHeight: 1.4,
                    letterSpacing: "-0.01em",
                  }}
                >
                  {job.role}
                </h3>
                <span
                  style={{
                    color: "rgba(255,255,255,0.4)",
                    fontSize: "0.85rem",
                  }}
                >
                  {job.company}
                </span>
              </div>
              <span
                style={{
                  color: "rgba(255,255,255,0.3)",
                  fontSize: "0.8rem",
                  fontWeight: 500,
                  whiteSpace: "nowrap",
                  marginTop: "4px",
                }}
              >
                {job.period}
              </span>
            </div>
            <ul style={{ padding: 0, margin: 0 }}>
              {job.bullets.map((bullet, i) => (
                <li
                  key={i}
                  style={{
                    display: "flex",
                    gap: "0.75rem",
                    marginBottom: "0.6rem",
                    color: "rgba(255,255,255,0.6)",
                    fontSize: "clamp(0.82rem, 1.5vw, 0.9rem)",
                    lineHeight: 1.7,
                  }}
                >
                  <span
                    style={{
                      color: "rgba(255,255,255,0.2)",
                      marginTop: "2px",
                      flexShrink: 0,
                    }}
                  >
                    ▸
                  </span>
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Services;
