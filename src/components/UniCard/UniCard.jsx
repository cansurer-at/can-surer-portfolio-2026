import React from "react";
import "./unicard.css";

const UniCard = ({ imgSrc, title, desc, start, end }) => {
  return (
    <>
      <div className="card-container">
        <div className="image-wrapper"> 
      
          <img width={110} height={110} src={imgSrc} className="image-itself" alt="logo" />
        </div>
        <div className="text-wrapper">
          <p className="card-title">{title}</p>
          <p className="card-desc">{desc}</p>
          <div className="date-wrapper">
          <p className="card-date-start">{start}&nbsp;&nbsp;&nbsp;</p>
          <p className="card-date-end">{end}</p>
        </div>
        </div>
       
      </div>
    </>
  );
};

export default UniCard;
