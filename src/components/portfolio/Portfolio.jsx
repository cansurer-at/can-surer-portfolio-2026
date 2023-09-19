import "./portfolio.css";
import PortfolioCompany from "./PortfolioCompany";
import PortfolioPractice from "./PortfolioPractice";
import { Tabs } from "antd";

const { TabPane } = Tabs;

const tabNames = [
  {
    label: "Client Projects",
    key: 1,
    children: <PortfolioCompany />,
  },
  { label: "Practice Projects", key: 2, children: <PortfolioPractice /> },
];

let sizeSettings = {
  medium: "medium",
  small: "xsmall",
};

const tabPanes = tabNames.map((tab) => (
  <TabPane tab={tab.label} key={tab.key}>
    {tab.children}
  </TabPane>
));


const Portfolio = () => {
  return (
    <>
      <section id="portfolio">
        <h5>My Recent Work</h5>
        <h2>Portfolio</h2>
      </section>
      <Tabs
        defaultActiveKey="1"
        centered
        type="card"

        size={window.innerWidth > 400 ? sizeSettings.medium : sizeSettings.small}
      >
        {tabPanes}
      </Tabs>
    </>
  );
};

export default Portfolio;
