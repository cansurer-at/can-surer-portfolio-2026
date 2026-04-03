import React from "react";
import { BsLinkedin } from "react-icons/bs";



const HeaderSocials = () => {
  return (
    <div className="header__socialss">
      <a
        className="social-btn"
        href="https://www.linkedin.com/in/cansurer/"
        rel="noreferrer"
        target="_blank"
      >
        <div>
          <BsLinkedin size={20}> </BsLinkedin>
        </div>
      </a>

      {/* <a
        href="https://www.youtube.com/@mesomeric2584"
        rel="noreferrer"
        target="_blank"
      >
        <AiOutlineYoutube size={20} />
      </a> */}
    </div>
  );
};

export default HeaderSocials;
