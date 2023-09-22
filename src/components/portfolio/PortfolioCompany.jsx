import React, { useState } from "react";

import MPOnline from "../../assets/portfolio/MPOnline.jpeg";
import biDoviz from "../../assets/portfolio/biDoviz.png";
import Yomio from "../../assets/portfolio/Yomio.png";
import Avica from "../../assets/portfolio/avica.png";
import "./portfolio.css";
import { Button } from "antd";

const PortfolioCompany = () => {
  const [loadMore, setLoadMore] = useState(false);
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
    }, 1000);
  };

  return (
    <>
      <section id="portfolio">
        <div className="container portfolio__container">
          <article className="portfolio__item">
            <div className="portfolio__item-image">
              {/* <img src={Avica} alt={"AVICA"} /> */}
            </div>
            <h3>AVICA (Data-driven AI company) - Vienna </h3>
            <h5>
              - Improving the development of the user panels for the avica
              portal.
              <br />
              <br />
              - I am part of a team that is working on the development of a
              data-driven video editor, which will leverage AI technologies to
              enhance its functionality.
              <br />
              <br />- Fixing bugs and applying Typescript improvements.
            </h5>

            <div className="portfolio__item-cta button-work-styles ">
              <a className="btn btn-primary" disabled>
                Product Unavailable
              </a>
            </div>
          </article>
          <article className="portfolio__item">
            <div className="portfolio__item-image">
              <img src={MPOnline} alt={"Milli piyango online website"} />
            </div>
            <h3>Milli Piyango (Online Casino Gaming) - Istanbul </h3>
            <h5>
              I was responsible for user panels of the website.
              <br />
              <br />
              - I maintain the code using the react functional component method.
              I create, edit and delete the components according to user needs.
              I am good at state management libraries such as Redux.
              <br />
              <br />- Translating user and business needs into functional
              frontend code while using Typescript
            </h5>

            <div className="portfolio__item-cta button-work-styles ">
              <a
                href="https://www.millipiyangoonline.com/"
                className="btn btn-primary"
                target="_blank"
                rel="noreferrer"
              >
                Live Website
              </a>
            </div>
          </article>

          <article className="portfolio__item">
            <div className="portfolio__item-image">
              <img src={biDoviz} alt={"ASDAS"} />
            </div>
            <h3> BiDoviz (Currencies) - Istanbul </h3>
            <h5>
              I was responsible for implementing fully responsive React Web
              Apps. I am ensuring that every chart, graph & API on the website
              works impeccably.
              <br />
              <br />
              - Handling all of the front-end work like creating components and
              website from scratch with clean structure.
              <br />
              <br />- Implementing and searching useful NPM packages for example
              Swiper JS, React Charts.
            </h5>

            <div className="portfolio__item-cta button-work-styles ">
              <a className="btn btn-primary" disabled>
                Product Unavailable
              </a>
            </div>
          </article>
          {loadMore && (
            <article className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={Yomio} alt={"Yomio webpage "} />
              </div>
              <h3> Yomio (Landing Page)- IST </h3>
              <h5>
                - I Develop this landing page with new user-facing features
                using React JS, Next JS, and Tailwind CSS.
                <br />
                <br />
                - Optimizing application for maximum speed and scalability.
                <br />
                <br />- Assuring that all user input is validated before
                submitting to back-end.
              </h5>

              <div className="portfolio__item-cta button-work-styles ">
                <a
                  href="https://yomio.com.tr/"
                  className="btn btn-primary"
                  target="_blank"
                  rel="noreferrer"
                >
                  Live Website
                </a>
              </div>
            </article>
          )}
        </div>

        <div style={{ justifyContent: "center", display: "flex" }}>
          <div className="portfolio__item-cta button-work-styles ">
            <Button
              className="btn-forantd btn-forantd-primary"
              type="primary"
              loading={loadings[0]}
              onClick={() => {
                enterLoading(0);
                setTimeout(() => {
                  setLoadMore(!loadMore);
                }, 1000);
              }}
            >
              {loadMore ? "Show less" : "Show more"}
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default PortfolioCompany;
