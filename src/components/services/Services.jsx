import React, { useState } from "react";
import { BsPatchCheckFill } from "react-icons/bs";
import { Button } from "antd";

import "./services.css";
import { BiCheck } from "react-icons/bi";
import UniCard from "../UniCard/UniCard";
import IMG1 from "../../assets/uni-graz.png";

import IMG2 from "../../assets/uni-mir.jpeg";
import IMG3 from "../../assets/logo-ghatem.png";
import IMG4 from "../../assets/PMI-logo.png";

const Services = () => {
  const [ShowMorePMI, setShowMorePMI] = useState(false);

  const [loadings, setLoadings] = useState([]);

  const enterLoading = (index) => {
    setLoadings((prevLoadings) => {
      const newLoadings = [...prevLoadings];
      newLoadings[index] = true;
      return newLoadings;
    });

    setTimeout(() => {
      setLoadings((prevLoadings) => {
        const newLoadings = [...prevLoadings];
        newLoadings[index] = false;
        return newLoadings;
      });
    }, 500);
  };

  return (
    <section id="services">
      <h5>Get to Know</h5>
      <h2>My Education Background</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>Education</h3>
          </div>
          {/* Pass the imported image as a prop */}
          <UniCard
            imgSrc={IMG2}
            title={"Mir Emad Institute of Higher Education"}
            desc={"Associates Degree, Architecture"}
            start={"Sep 2009"}
            end={"Sep 2011"}
          ></UniCard>

          <UniCard
            imgSrc={IMG3}
            title={"Ghaem Industrial Higher Education"}
            desc={"Bachelors Degree, Architectural Technology Engineering"}
            start={"Sep 2011"}
            end={"Sep 2013"}
          ></UniCard>
        </article>
        {/* END OF UI/UX  */}
        <article className="service">
          <div className="service__head">
            <h3>Professional Certificates</h3>
          </div>

          <UniCard
            imgSrc={IMG1}
            title={"Karl-Franzens-Universität Graz"}
            desc={"Professional Certificate, Project Management"}
            start={"Jan 2023"}
            end={"Mar 2023"}
          ></UniCard>

          <UniCard
            imgSrc={IMG1}
            title={"Karl-Franzens-Universität Graz"}
            desc={"Professional Certificate, Business Management"}
            start={"Aug 2023"}
            end={"Nov 2023"}
          ></UniCard>
        </article>
      </div>
      <section id="services" className="services__container-new container">
        <article className="service-new">
          <div className="service__head-new">
            <h3>PMI Certificates</h3>
          </div>
          <div className="triple-items">
            <UniCard
              imgSrc={IMG4}
              title={"Project Management Skills for Leaders"}
            ></UniCard>
            <UniCard
              imgSrc={IMG4}
              title={"From Manager to Leader Certificate"}
            ></UniCard>
            <UniCard
              imgSrc={IMG4}
              title={"Project Management Foundations"}
            ></UniCard>
          </div>
          <div className="triple-items">
            <UniCard
              imgSrc={IMG4}
              title={"Project Management Foundations: Risk"}
            ></UniCard>

            <UniCard
              imgSrc={IMG4}
              title={"Project Management Foundations: Ethics"}
            ></UniCard>
            <UniCard
              imgSrc={IMG4}
              title={"Project Management Foundations: Teams"}
            ></UniCard>
          </div>
          {ShowMorePMI && (
            <>
              <div className="triple-items">
                <UniCard
                  imgSrc={IMG4}
                  title={"Project Management Foundations: Budgets"}
                ></UniCard>

                <UniCard
                  imgSrc={IMG4}
                  title={"Project Management Foundations: Schedules"}
                ></UniCard>
                <UniCard
                  imgSrc={IMG4}
                  title={"Project Management Foundations: Requirements"}
                ></UniCard>
              </div>
              <div className="triple-items">
                <UniCard
                  imgSrc={IMG4}
                  title={"Project Management Foundations: Comunication"}
                ></UniCard>

                <UniCard
                  imgSrc={IMG4}
                  title={"Managing Project Stakeholders"}
                ></UniCard>
                <UniCard
                  imgSrc={IMG4}
                  title={"Developing Your Emotional Intelligence"}
                ></UniCard>
                <UniCard
                  imgSrc={IMG4}
                  title={
                    "Sustainability in the Company: Implementing Strategies in Practice"
                  }
                ></UniCard>
                <UniCard
                  imgSrc={IMG4}
                  title={
                    "Sustainability in Business: Fundamentals of Sustainable Economic Activity"
                  }
                ></UniCard>
                <UniCard
                  imgSrc={IMG4}
                  title={"Sustainability Talks: Tips from Antje von Dewitz"}
                ></UniCard>
              </div>
            </>
          )}
          <div style={{ justifyContent: "center", display: "flex" }}>
            <div style={{ marginBottom: "20px" }} className="button-container">
              <Button
                className=".ant-btn-primary"
                type="primary"
                loading={loadings[0]}
                onClick={() => {
                  enterLoading(0);
                  setTimeout(() => {
                    setShowMorePMI(!ShowMorePMI);
                  }, 500);
                }}
              >
                {ShowMorePMI ? "Show less" : "Show more"}
              </Button>
            </div>
          </div>
        </article>
      </section>
    </section>
  );
};

export default Services;
