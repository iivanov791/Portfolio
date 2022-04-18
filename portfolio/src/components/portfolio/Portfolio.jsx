import "../portfolio/portfolio.scss";
import PortfolioList from "../portfolioList/PortfolioList";
import { useEffect, useState } from "react";
import {
  featuredPortfolio,
  WebPortfolio,
  MobilePortfolio,
  DesignPortfolio,
  JavaPortfolio,
  HistoricianPortfolio,
  BookiesPortfolio
} from "../../data";

export default function Portfolio() {
  const [selected, setSelected] = useState("featured");
  const [data, setData] = useState([]);

  const list = [
    {
      id: "featured",
      title: "Featured"
    },

    {
      id: "web",
      title: "Web App"
    },

    {
      id: "mobile",
      title: "Mobile App"
    },

    {
      id: "design",
      title: "Design"
    },

    {
      id: "java",
      title: "Java Applications"
    },

    {
      id: "history",
      title: "History Researches"
    },

    {
      id: "sports",
      title: "Sports Bookies"
    }
  ];

  useEffect(() => {
    switch (selected) {
      case "featured":
        setData(featuredPortfolio);
        break;
      case "web":
        setData(WebPortfolio);
        break;
      case "mobile":
        setData(MobilePortfolio);
        break;
      case "design":
        setData(DesignPortfolio);
        break;
      case "java":
        setData(JavaPortfolio);
        break;
      case "history":
        setData(HistoricianPortfolio);
        break;
      case "sports":
        setData(BookiesPortfolio);
        break;
      default:
        setData(featuredPortfolio);
    }
  }, [selected]);

  return (
    <div className="portfolio" id="portfolio">
      <h1>Portfolio</h1>
      <ul>
        {list.map((item) => (
          <PortfolioList
            title={item.title}
            active={selected === item.id}
            setSelected={setSelected}
            id={item.id}
          />
        ))}
      </ul>
      <div className="container">
        {data.map((d) => (
          <div className="item">
            <img src={d.img} alt="" />
            <h3>{d.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}
