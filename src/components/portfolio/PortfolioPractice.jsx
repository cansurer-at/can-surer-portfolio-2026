import React, { useState } from "react";
import IMG1 from "../../assets/portfolio/gymApp.png";
import IMG2 from "../../assets/portfolio/fitnessApp.png";
import IMG3 from "../../assets/portfolio/1Smooth-bank-react-app-rooter.jpg";
import IMG4 from "../../assets/portfolio/2GPRT3-react-app.jpg";
import IMG5 from "../../assets/portfolio/5Keeper-app-react.jpg";
import IMG6 from "../../assets/portfolio/pigGame.png";
import IMG7 from "../../assets/portfolio/11To-do-list-react-app.png";
import IMG8 from "../../assets/portfolio/13Simon-game-javascript.png";
import IMG9 from "../../assets/portfolio/14Guess-my-number.png";

import { Button } from "antd";
const PortfolioPractice = () => {
  const [loadMoreContent, setLoadMoreContent] = useState(false);
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
              <img src={IMG1} alt={"demo"} />
            </div>
            <h3>Gym Vite+TypeScript React App</h3>

            <div className="portfolio__item-cta">
              <a
                href="https://github.com/cansurer-at/gym-typescript-app"
                className="btn"
                target="_blank"
                rel="noreferrer"
              >
                Github
              </a>
              <a
                href="https://main--eloquent-gaufre-956f5f.netlify.app/"
                className="btn btn-primary"
                target="_blank"
                rel="noreferrer"
              >
                Live Demo
              </a>
            </div>
          </article>

          <article className="portfolio__item">
            <div className="portfolio__item-image">
              <img src={IMG2} alt={"demo2"} />
            </div>
            <h3>Fitness(Mui) React App</h3>

            <div className="portfolio__item-cta">
              <a
                href="https://github.com/cansurer-at/gym-app"
                className="btn"
                target="_blank"
                rel="noreferrer"
              >
                Github
              </a>
              <a
                href="https://thriving-sherbet-a17b51.netlify.app/"
                className="btn btn-primary"
                target="_blank"
                rel="noreferrer"
              >
                Live Demo
              </a>
            </div>
          </article>

          <article className="portfolio__item">
            <div className="portfolio__item-image">
              <img src={IMG3} alt={"demo3"} />
            </div>
            <h3>Bank Landing Page React</h3>

            <div className="portfolio__item-cta">
              <a
                href="https://github.com/cansurer-at/Smooth-React-App.git"
                className="btn"
                target="_blank"
                rel="noreferrer"
              >
                Github
              </a>
              <a
                href="https://cansurer-at.github.io/Smooth-React-App/"
                className="btn btn-primary"
                target="_blank"
                rel="noreferrer"
              >
                Live Demo
              </a>
            </div>
          </article>

          {loadMoreContent && (
            <>
              <article className="portfolio__item">
                <div className="portfolio__item-image">
                  <img src={IMG4} alt={"demo4"} />
                </div>
                <h3>GPT-3 Responsive React App</h3>

                <div className="portfolio__item-cta">
                  <a
                    href="https://github.com/cansurer-at/GPT3-React-App"
                    className="btn"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Github
                  </a>
                  <a
                    href="https://cansurer-at.github.io/GPT3-React-App/"
                    className="btn btn-primary"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Live Demo
                  </a>
                </div>
              </article>
              <article className="portfolio__item">
                <div className="portfolio__item-image">
                  <img src={IMG5} alt={"demo5"} />
                </div>
                <h3>Google Keeper Clone React App</h3>

                <div className="portfolio__item-cta">
                  <a
                    href="https://github.com/cansurer-at/Keeper-App-React"
                    className="btn"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Github
                  </a>
                  <a
                    href="https://cansurer-at.github.io/Keeper-App-React/"
                    className="btn btn-primary"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Live Demo
                  </a>
                </div>
              </article>
              <article className="portfolio__item">
                <div className="portfolio__item-image">
                  <img src={IMG6} alt={"demo6"} />
                </div>
                <h3>Pig Game Javascript</h3>

                <div className="portfolio__item-cta">
                  <a
                    href="https://github.com/cansurer-at/pig-game"
                    className="btn"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Github
                  </a>
                  <a
                    href="https://cansurer-at.github.io/pig-game/"
                    className="btn btn-primary"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Live Demo
                  </a>
                </div>
              </article>

              <article className="portfolio__item">
                <div className="portfolio__item-image">
                  <img src={IMG7} alt={"demo7"} />
                </div>
                <h3>To-Do List React App</h3>

                <div className="portfolio__item-cta">
                  <a
                    href="https://github.com/cansurer-at/To-Do-List-React-App"
                    className="btn"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Github
                  </a>
                  <a
                    href="https://cansurer-at.github.io/To-Do-List-React-App/"
                    className="btn btn-primary"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Live Demo
                  </a>
                </div>
              </article>
              <article className="portfolio__item">
                <div className="portfolio__item-image">
                  <img src={IMG8} alt={"demo8"} />
                </div>
                <h3>Simon Game Javascript</h3>

                <div className="portfolio__item-cta">
                  <a
                    href='"https://github.com/cansurer-at/Simon-Game-Challenge'
                    className="btn"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Github
                  </a>
                  <a
                    href="https://cansurer-at.github.io/Simon-Game-Challenge/"
                    className="btn btn-primary"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Live Demo
                  </a>
                </div>
              </article>
              <article className="portfolio__item">
                <div className="portfolio__item-image">
                  <img src={IMG9} alt={"demo9"} />
                </div>
                <h3>Guess My Number Game</h3>

                <div className="portfolio__item-cta">
                  <a
                    href="https://github.com/cansurer-at/guess-my-number"
                    className="btn"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Github
                  </a>
                  <a
                    href="https://cansurer-at.github.io/guess-my-number/"
                    className="btn btn-primary"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Live Demo
                  </a>
                </div>
              </article>
            </>
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
                  setLoadMoreContent(!loadMoreContent);
                }, 1000);
              }}
            >
              {loadMoreContent ? "Show less" : "Show more"}
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default PortfolioPractice;
