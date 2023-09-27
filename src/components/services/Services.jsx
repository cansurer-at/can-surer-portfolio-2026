import React, { useState } from "react";
import { Button } from "antd";
import "./services.css";
import UniCard from "../UniCard/UniCard";
import IMG1 from "../../assets/uni-graz.png";
import IMG2 from "../../assets/uni-mir.jpeg";
import IMG3 from "../../assets/logo-ghatem.png";
import IMG4 from "../../assets/PMI-logo.png";
import { useTranslation } from 'react-i18next'; // Import useTranslation hook

const Services = () => {
  const { t } = useTranslation(); // Use useTranslation hook to access translations
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
      <h5>{t('getToKnow')}</h5>
      <h2>{t('educationBackground')}</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>{t('education')}</h3>
          </div>
          <UniCard
            imgSrc={IMG2}
            title={t('architectureDegree')}
            desc={t('architectureDegreeDesc')}
            start={t('architectureDegreeStart')}
            end={t('architectureDegreeEnd')}
          ></UniCard>

          <UniCard
            imgSrc={IMG3}
            title={t('engineeringDegree')}
            desc={t('engineeringDegreeDesc')}
            start={t('engineeringDegreeStart')}
            end={t('engineeringDegreeEnd')}
          ></UniCard>
        </article>

        <article className="service">
          <div className="service__head">
            <h3>{t('professionalCertificates')}</h3>
          </div>

          <UniCard
            imgSrc={IMG1}
            title={t('projectManagementCertificate')}
            desc={t('projectManagementCertificateDesc')}
            start={t('projectManagementCertificateStart')}
            end={t('projectManagementCertificateEnd')}
          ></UniCard>

          <UniCard
            imgSrc={IMG1}
            title={t('businessManagementCertificate')}
            desc={t('businessManagementCertificateDesc')}
            start={t('businessManagementCertificateStart')}
            end={t('businessManagementCertificateEnd')}
          ></UniCard>
        </article>
      </div>
      <section id="services" className="services__container-new container">
        <article className="service-new">
          <div className="service__head-new">
            <h3>{t('pmiCertificates')}</h3>
          </div>
          <div className="triple-items">
            <UniCard
              imgSrc={IMG4}
              title={t('projectManagementSkills')}
              desc={t('projectManagementSkillsDesc')}
            ></UniCard>
            <UniCard
              imgSrc={IMG4}
              title={t('managerToLeader')}
              desc={t('managerToLeaderDesc')}
            ></UniCard>
            <UniCard
              imgSrc={IMG4}
              title={t('projectManagementFoundations')}
              desc={t('projectManagementFoundationsDesc')}
            ></UniCard>
          </div>
          <div className="triple-items">
            <UniCard
              imgSrc={IMG4}
              title={t('pmfRisk')}
              desc={t('pmfRiskDesc')}
            ></UniCard>
            <UniCard
              imgSrc={IMG4}
              title={t('pmfEthics')}
              desc={t('pmfEthicsDesc')}
            ></UniCard>
            <UniCard
              imgSrc={IMG4}
              title={t('pmfTeams')}
              desc={t('pmfTeamsDesc')}
            ></UniCard>
          </div>
          {ShowMorePMI && (
            <>
              <div className="triple-items">
                <UniCard
                  imgSrc={IMG4}
                  title={t('pmfBudgets')}
                  desc={t('pmfBudgetsDesc')}
                ></UniCard>
                <UniCard
                  imgSrc={IMG4}
                  title={t('pmfSchedules')}
                  desc={t('pmfSchedulesDesc')}
                ></UniCard>
                <UniCard
                  imgSrc={IMG4}
                  title={t('pmfRequirements')}
                  desc={t('pmfRequirementsDesc')}
                ></UniCard>
              </div>
              <div className="triple-items">
                <UniCard
                  imgSrc={IMG4}
                  title={t('pmfComunication')}
                  desc={t('pmfComunicationDesc')}
                ></UniCard>
                <UniCard
                  imgSrc={IMG4}
                  title={t('managingStakeholders')}
                  desc={t('managingStakeholdersDesc')}
                ></UniCard>
                <UniCard
                  imgSrc={IMG4}
                  title={t('emotionalIntelligence')}
                  desc={t('emotionalIntelligenceDesc')}
                ></UniCard>
                <UniCard
                  imgSrc={IMG4}
                  title={t('sustainabilityCompany')}
                  desc={t('sustainabilityCompanyDesc')}
                ></UniCard>
                <UniCard
                  imgSrc={IMG4}
                  title={t('sustainabilityBusiness')}
                  desc={t('sustainabilityBusinessDesc')}
                ></UniCard>
                <UniCard
                  imgSrc={IMG4}
                  title={t('sustainabilityTalks')}
                  desc={t('sustainabilityTalksDesc')}
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
                {ShowMorePMI ? t('showLess') : t('showMore')}
              </Button>
            </div>
          </div>
        </article>
      </section>
    </section>
  );
};

export default Services;
