import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import "./services.css";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";

const AVICA_PHOTOS = [
  "/images/avica/projects.png",
  "/images/avica/templates-editor.png",
  "/images/avica/nodes.png",
];

const SISAL_PHOTOS = [
  "/images/sisal/5-register.png",
  "/images/sisal/1-islem-gecmisim.png",
  "/images/sisal/4-hesap-ozeti.png",
  "/images/sisal/3-profilim.png",
];

const Lightbox = ({ photos, startIndex, onClose }) => {
  const [current, setCurrent] = useState(startIndex);

  const prev = (e) => { e.stopPropagation(); setCurrent((c) => (c - 1 + photos.length) % photos.length); };
  const next = (e) => { e.stopPropagation(); setCurrent((c) => (c + 1) % photos.length); };

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") setCurrent((c) => (c - 1 + photos.length) % photos.length);
      if (e.key === "ArrowRight") setCurrent((c) => (c + 1) % photos.length);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [photos.length, onClose]);

  return (
    <div className="lightbox__overlay" onClick={onClose}>
      <div className="lightbox__box" onClick={(e) => e.stopPropagation()}>
        <button className="lightbox__close" onClick={onClose} aria-label="Close">✕</button>
        <img src={photos[current]} alt={`Slide ${current + 1}`} className="lightbox__img" />
        {photos.length > 1 && (
          <div className="lightbox__controls">
            <button className="lightbox__arrow" onClick={prev} aria-label="Previous">&#8592;</button>
            <span className="lightbox__counter">{current + 1} / {photos.length}</span>
            <button className="lightbox__arrow" onClick={next} aria-label="Next">&#8594;</button>
          </div>
        )}
      </div>
    </div>
  );
};

const PhotoGallery = ({ photos }) => {
  const [lightboxIndex, setLightboxIndex] = useState(null);

  if (!photos || photos.length === 0) return null;

  return (
    <>
      <div className="timeline__gallery">
        {photos.map((src, i) => (
          <button
            key={i}
            className="timeline__gallery-thumb"
            onClick={() => setLightboxIndex(i)}
            aria-label={`Open photo ${i + 1}`}
          >
            <img src={src} alt={`Work ${i + 1}`} />
          </button>
        ))}
      </div>
      {ReactDOM.createPortal(
        <AnimatePresence>
          {lightboxIndex !== null && (
            <motion.div
              className="lightbox__portal"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <Lightbox
                photos={photos}
                startIndex={lightboxIndex}
                onClose={() => setLightboxIndex(null)}
              />
            </motion.div>
          )}
        </AnimatePresence>,
        document.body
      )}
    </>
  );
};

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
      photos: AVICA_PHOTOS,
    },
    {
      role: t("sisalRole"),
      company: t("sisalCompanyName"),
      companyUrl: "https://www.sisal.com/eng",
      subUrl: "https://flutter.com/",
      sub: t("sisalCompanySub"),
      sub2Url: "https://www.millipiyangoonline.com",
      sub2: t("sisalCompanySub2"),
      period: t("sisalPeriod"),
      location: t("sisalLocation"),
      bullets: [t("sisalBullet1"), t("sisalBullet2"), t("sisalBullet3")],
      photos: SISAL_PHOTOS,
    },
    {
      role: t("tpRole"),
      company: t("tpCompanyName"),
      companyUrl: "https://www.tp.com/en-us/",
      sub: t("tpCompanySub"),
      period: t("tpPeriod"),
      location: t("tpLocation"),
      bullets: [t("tpBullet1"), t("tpBullet2"), t("tpBullet3")],
      photos: [],
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
                  {(job.sub || job.sub2) && (
                    <p className="timeline__sub">
                      {job.subUrl ? (
                        <a href={job.subUrl} target="_blank" rel="noreferrer" className="timeline__company-link">{job.sub}</a>
                      ) : job.sub}
                      {job.sub && job.sub2 && " · "}
                      {job.sub2 && (job.sub2Url ? (
                        <a href={job.sub2Url} target="_blank" rel="noreferrer" className="timeline__company-link">{job.sub2}</a>
                      ) : job.sub2)}
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
              <PhotoGallery photos={job.photos} />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Services;
