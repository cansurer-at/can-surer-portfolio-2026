import React, { useState } from "react";
import "./experience.css";
import { BsPatchCheckFill } from "react-icons/bs";
import { Button } from "antd";
import { useTranslation } from 'react-i18next'; // Import useTranslation hook

const Experience = () => {
  const { t } = useTranslation(); // Use useTranslation hook to access translations
  const [ShowMoreTools, setShowMoreTools] = useState(false);
  const [ShowMoreProjectManagement, setShowMoreProjectManagement] = useState(false);
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
      <h5>{t('skillsHeader')}</h5>
      <h2>{t('mySkills')}</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>{t('projectManagement')}</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>{t('agileMethodologies')}</h4>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>{t('technologySelection')}</h4>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>{t('projectPlanning')}</h4>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>{t('budgetManagement')}</h4>
              </div>
            </article>

            {ShowMoreProjectManagement && (
              <>
                <article className="experience__details">
                  <BsPatchCheckFill className="experience__details-icon" />
                  <div>
                    <h4>{t('stakeholderCommunication')}</h4>
                  </div>
                </article>
                <article className="experience__details">
                  <BsPatchCheckFill className="experience__details-icon" />
                  <div>
                    <h4>{t('qualityAssurance')}</h4>
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
                  {ShowMoreProjectManagement ? t('showLess') : t('showMore')}
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="experience__frontend">
          <h3>{t('managementToolsTechnologies')}</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>{t('asana')}</h4>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>{t('MicrosoftExcel')}</h4>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>{t('jira')}</h4>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>{t('microsoftProject')}</h4>
              </div>
            </article>

            {ShowMoreTools && (
              <>
                <article className="experience__details">
                  <BsPatchCheckFill className="experience__details-icon" />
                  <div>
                    <h4>{t('office365')}</h4>
                  </div>
                </article>
                <article className="experience__details">
                  <BsPatchCheckFill className="experience__details-icon" />
                  <div>
                    <h4>{t('sap')}</h4>
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
                  {ShowMoreTools ? t('showLess') : t('showMore')}
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
