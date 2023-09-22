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
          <h2>{title}</h2>
          <h4>{desc}</h4>
          <div className="date-wrapper">
          <h4>{start}&nbsp;&nbsp;&nbsp;</h4>
          <h4>{end}</h4>
        </div>
        </div>
       
      </div>
    </>
  );
};

export default UniCard;
