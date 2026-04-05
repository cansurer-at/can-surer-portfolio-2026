import React, { useState, useEffect, useRef } from "react";
import "./testimonials.css";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";

const Testimonials = () => {
  const { t } = useTranslation();
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);
  const timerRef = useRef(null);

  const testimonials = [
    {
      initial: "A",
      name: t("avicaTestimonialName"),
      link: "https://www.avica.cloud/",
      text: t("avicaTestimonialText"),
      isAvica: true,
    },
    {
      initial: "S",
      name: t("himmelbergName"),
      link: "https://www.linkedin.com/in/sarpgokdag/",
      text: t("himmelbergText"),
    },
  ];

  const goTo = (index, dir) => {
    setDirection(dir);
    setCurrent(index);
  };

  const next = () => {
    const nextIndex = (current + 1) % testimonials.length;
    goTo(nextIndex, 1);
  };

  const prev = () => {
    const prevIndex = (current - 1 + testimonials.length) % testimonials.length;
    goTo(prevIndex, -1);
  };

  useEffect(() => {
    timerRef.current = setTimeout(() => {
      timerRef.current = setInterval(() => {
        setCurrent((c) => {
          setDirection(1);
          return (c + 1) % testimonials.length;
        });
      }, 5000);
    }, 1000);

    return () => {
      clearTimeout(timerRef.current);
      clearInterval(timerRef.current);
    };
  }, []);

  const handleDotClick = (i) => {
    clearTimeout(timerRef.current);
    clearInterval(timerRef.current);
    goTo(i, i > current ? 1 : -1);
  };

  const item = testimonials[current];

  const variants = {
    enter: (dir) => ({ x: dir > 0 ? "60%" : "-60%", opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (dir) => ({ x: dir > 0 ? "-60%" : "60%", opacity: 0 }),
  };

  return (
    <section id="testimonials">
      <h5>{t("reviewFromClients")}</h5>
      <h2>{t("testimonialsTitle")}</h2>

      <div className="testimonials__slider">
        <div className="testimonials__track">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.article
              key={current}
              className="testimonial__card"
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.45, ease: [0.4, 0, 0.2, 1] }}
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
          </AnimatePresence>
        </div>

        <div className="testimonials__controls">
          <button onClick={prev} aria-label="Previous testimonial" className="testimonials__arrow">&#8592;</button>
          <div className="testimonials__dots">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => handleDotClick(i)}
                className={`testimonials__dot${i === current ? " active" : ""}`}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>
          <button onClick={next} aria-label="Next testimonial" className="testimonials__arrow">&#8594;</button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
