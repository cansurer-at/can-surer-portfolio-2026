import React, { useState, useEffect } from "react";
import "./nav.css";
import { useTranslation } from "react-i18next";
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { BiBook } from "react-icons/bi";
import { RiServiceLine } from "react-icons/ri";
import { BiCommentDetail, BiMessageSquareDetail } from "react-icons/bi";

const navItems = [
  { id: "top", icon: AiOutlineHome, labelKey: "home" },
  { id: "about", icon: AiOutlineUser, labelKey: "about" },
  { id: "experience", icon: BiBook, labelKey: "skills" },
  { id: "services", icon: RiServiceLine, labelKey: "services" },
  { id: "testimonials", icon: BiCommentDetail, labelKey: "testimonials" },
  { id: "contact", icon: BiMessageSquareDetail, labelKey: "contact" },
];

const Nav = () => {
  const { t } = useTranslation();
  const [activeSection, setActiveSection] = useState("top");

  useEffect(() => {
    const sections = navItems
      .filter((item) => item.id !== "top")
      .map((item) => document.getElementById(item.id))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const handleNav = (id) => {
    if (id === "top") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      setActiveSection("top");
    } else {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav role="navigation" aria-label="Main navigation">
      {navItems.map(({ id, icon: Icon, labelKey }) => (
        <button
          key={id}
          onClick={() => handleNav(id)}
          className={activeSection === id ? "active" : ""}
          aria-label={t(labelKey)}
          aria-current={activeSection === id ? "page" : undefined}
        >
          <Icon aria-hidden="true" />
          <span className="nav__label">{t(labelKey)}</span>
        </button>
      ))}
    </nav>
  );
};

export default Nav;
