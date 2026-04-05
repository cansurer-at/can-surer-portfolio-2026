import React from "react";
import "./nav.css";
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { BiBook } from "react-icons/bi";
import { RiServiceLine } from "react-icons/ri";
import { BiMessageSquareDetail, BiCommentDetail } from "react-icons/bi";
import { useState } from "react";

const Nav = () => {
  const [activeNav, setActiveNav] = useState("");

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setActiveNav("#");
  };

  return (
    <nav role="navigation" aria-label="Main navigation">
      <button
        onClick={scrollToTop}
        className={activeNav === "#" ? "active" : ""}
        aria-label="Home"
        style={{ background: "none", cursor: "pointer", border: "none" }}
      >
        <AiOutlineHome />
      </button>
      <a
        href="#about"
        onClick={() => setActiveNav("#about")}
        className={activeNav === "#about" ? "active" : ""}
        aria-label="About"
      >
        <AiOutlineUser />
      </a>
      <a
        href="#experience"
        onClick={() => setActiveNav("#experience")}
        className={activeNav === "#experience" ? "active" : ""}
        aria-label="Skills"
      >
        <BiBook />
      </a>
      <a
        href="#services"
        onClick={() => setActiveNav("#services")}
        className={activeNav === "#services" ? "active" : ""}
        aria-label="Work Experience"
      >
        <RiServiceLine />
      </a>
      <a
        href="#testimonials"
        onClick={() => setActiveNav("#testimonials")}
        className={activeNav === "#testimonials" ? "active" : ""}
        aria-label="Testimonials"
      >
        <BiCommentDetail />
      </a>
      <a
        href="#contact"
        onClick={() => setActiveNav("#contact")}
        className={activeNav === "#contact" ? "active" : ""}
        aria-label="Contact"
      >
        <BiMessageSquareDetail />
      </a>
    </nav>
  );
};

export default Nav;
