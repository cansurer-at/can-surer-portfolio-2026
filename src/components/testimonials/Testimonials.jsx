import React from "react";
import "./testimonials.css";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const Testimonials = () => {
  const { t } = useTranslation();

  const testimonials = [
    {
      initial: "A",
      name: t("avicaTestimonialName"),
      link: "https://www.avica.cloud/",
      text: t("avicaTestimonialText"),
      isAvica: true,
    },
  ];

  return (
    <section id="testimonials">
      <h5>{t("reviewFromClients")}</h5>
      <h2 className="testimonials__title">{t("testimonialsTitle")}</h2>

      <div className="testimonials__container">
        {testimonials.map((item, index) => (
          <motion.article
            key={index}
            className="testimonial__card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
            viewport={{ once: true }}
          >
            <div className="testimonial__avatar">
              {item.isAvica ? (
                <div className="testimonial__avatar-avica">A</div>
              ) : (
                <div className="testimonial__avatar-letter">
                  <em>{item.initial}</em>
                </div>
              )}
            </div>
            <h4 className="testimonial__name">
              {item.name}
              {item.link && (
                <>
                  {" — "}
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noreferrer"
                    className="testimonial__link"
                  >
                    {item.link.replace("https://", "").replace(/\/$/, "")}
                  </a>
                </>
              )}
            </h4>
            <p className="testimonial__text">{item.text}</p>
          </motion.article>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
