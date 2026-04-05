import React from "react";
import "./services.css";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const Services = () => {
  const { t } = useTranslation();

  const jobs = [
    {
      role: t("avicaRole"),
      company: t("avicaCompanyName"),
      sub: t("avicaCompanySub"),
      period: t("avicaPeriod"),
      location: t("avicaLocation"),
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
      company: t("sisalCompanyName"),
      sub: t("sisalCompanySub"),
      period: t("sisalPeriod"),
      location: t("sisalLocation"),
      bullets: [t("sisalBullet1"), t("sisalBullet2"), t("sisalBullet3")],
    },
    {
      role: t("tpRole"),
      company: t("tpCompanyName"),
      sub: t("tpCompanySub"),
      period: t("tpPeriod"),
      location: t("tpLocation"),
      bullets: [t("tpBullet1"), t("tpBullet2"), t("tpBullet3")],
    },
  ];

  return (
    <section id="services">
      <h2 className="timeline__title">{t("workExperience")}</h2>

      <div className="timeline">
        {jobs.map((job, index) => (
          <motion.div
            key={index}
            className="timeline__item"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.12 }}
            viewport={{ once: true }}
          >
            <div className="timeline__dot" />
            <div className="timeline__card">
              <div className="timeline__header">
                <div>
                  <h3 className="timeline__company">{job.company}</h3>
                  {job.sub && (
                    <p className="timeline__sub">{job.sub}</p>
                  )}
                  <p className="timeline__role">{job.role}</p>
                </div>
                <div className="timeline__meta">
                  <span className="timeline__period">{job.period}</span>
                  <span className="timeline__location">{job.location}</span>
                </div>
              </div>
              <ul className="timeline__bullets">
                {job.bullets.map((bullet, i) => (
                  <li key={i}>{bullet}</li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Services;
