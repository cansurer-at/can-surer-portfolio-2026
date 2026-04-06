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
      companyUrl: "https://www.avica.cloud/",
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
      companyUrl: "https://www.sisal.it/",
      subUrl: "https://www.flutter.com/",
      sub: t("sisalCompanySub"),
      period: t("sisalPeriod"),
      location: t("sisalLocation"),
      bullets: [t("sisalBullet1"), t("sisalBullet2"), t("sisalBullet3")],
    },
    {
      role: t("tpRole"),
      company: t("tpCompanyName"),
      companyUrl: "https://www.teleperformance.com/",
      sub: t("tpCompanySub"),
      period: t("tpPeriod"),
      location: t("tpLocation"),
      bullets: [t("tpBullet1"), t("tpBullet2"), t("tpBullet3")],
    },
  ];

  return (
    <section id="services">
      <h5>{t("experience")}</h5>
      <h2>{t("workExperience")}</h2>

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
                  <h3 className="timeline__company">
                    {job.companyUrl ? (
                      <a href={job.companyUrl} target="_blank" rel="noreferrer" className="timeline__company-link">
                        {job.company}
                      </a>
                    ) : job.company}
                  </h3>
                  {job.sub && (
                    <p className="timeline__sub">
                      {job.subUrl ? (
                        <a href={job.subUrl} target="_blank" rel="noreferrer" className="timeline__company-link">
                          {job.sub}
                        </a>
                      ) : job.sub}
                    </p>
                  )}
                  <p className="timeline__role">{job.role}</p>
                </div>
                <div className="timeline__meta">
                  <span className="timeline__period">{job.period}</span>
                </div>
              </div>
              {job.location && (
                <p className="timeline__location" style={{ marginBottom: "0.8rem" }}>{job.location}</p>
              )}
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
