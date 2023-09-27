import React, { useState } from "react";
import "./experience.css";
import { BsPatchCheckFill } from "react-icons/bs";
import { Button } from "antd";

const Experience = () => {
  const [ShowMoreTools, setShowMoreTools] =
    useState(false);
    const [ShowMoreProjectManagement, setShowMoreProjectManagement] =
    useState(false);
  const [loadings, setLoadings] = useState([]);
  const [loadings2, setLoadings2] = useState([]);

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

  const enterLoading2 = (index) => {
    setLoadings2((prevLoadings) => {
      const newLoadings2 = [...prevLoadings];
      newLoadings2[index] = true;
      return newLoadings2;
    });

    setTimeout(() => {
      setLoadings2((prevLoadings) => {
        const newLoadings2 = [...prevLoadings];
        newLoadings2[index] = false;
        return newLoadings2;
      });
    }, 500);
  };

  return (
    <section id="experience">
      <h5>What Skills I Have</h5>
      <h2>My Skills</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Project Management</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>Agile Methodologies</h4>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>Technology Selection</h4>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>Project Planning</h4>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>Budget Management </h4>
              </div>
            </article>
           

            {ShowMoreProjectManagement && (
              <>
                <article className="experience__details">
                  <BsPatchCheckFill className="experience__details-icon" />
                  <div>
                    <h4>
                    Stakeholder Communication</h4>
                  </div>
                </article>
                <article className="experience__details">
                  <BsPatchCheckFill className="experience__details-icon" />
                  <div>
                    <h4>Quality Assurance</h4>
                  </div>
                </article>
              
              </>
            )}
            <div style={{ justifyContent: "center", display: "flex" }}>
              <div className="button-container">
                <Button
                  className=".ant-btn-primary"
                  type="primary"
                  loading={loadings[0]}
                  onClick={() => {
                    enterLoading(0);
                    setTimeout(() => {
                      setShowMoreProjectManagement(!ShowMoreProjectManagement);
                    }, 500);
                  }}
                >
                  {ShowMoreProjectManagement ? "Show less" : "Show more"}
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* END OF PROJECT MANAGEMENT */}

        <div className="experience__frontend">
          <h3>Management Tools & Technologies</h3>
          <div className="experience__content">
          
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>Asana</h4>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4></h4>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>Jira</h4>
              </div>
            </article>

            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>Microsoft Project</h4>
              </div>
            </article>
           

            {ShowMoreTools && (
              <>
               
                <article className="experience__details">
                  <BsPatchCheckFill className="experience__details-icon" />
                  <div>
                    <h4>Office 365</h4>
                  </div>
                </article>
               

           
                <article className="experience__details">
                  <BsPatchCheckFill className="experience__details-icon" />
                  <div>
                    <h4>SAP</h4>
                  </div>
                </article>
        
              
              </>
            )}
            <div style={{ justifyContent: "center", display: "flex" }}>
              <div className="button-container">
                <Button
                  className=".ant-btn-primary"
                  type="primary"
                  loading={loadings2[0]}
                  onClick={() => {
                    enterLoading2(0);
                    setTimeout(() => {
                      setShowMoreTools(!ShowMoreTools);
                    }, 500);
                  }}
                >
                  {ShowMoreTools ? "Show less" : "Show more"}
                </Button>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Experience;
