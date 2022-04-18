import "../works/works.scss";
import { useState } from "react";

export default function Works() {
  const [currentSlider, setCurrentSlider] = useState(0);

  const data = [
    {
      id: 1,
      icon: "assets/Battle_of_Sinop.jpg",
      title: "History Battles",
      descr: "Lorem ipsum dolor sit amet consectetur adipisicing",
      img: "assets/forkio app.jpg"
    },

    {
      id: 2,
      icon: "assets/basket.jpg",
      title: "Basketball Bookie",
      descr:
        "An amazing professional in Basketball, especially Eurobasket matches",
      img: "assets/football.jpg"
    },

    {
      id: 3,
      icon: "assets/hairdresser.jpg",
      title: "Hairdresser",
      descr: "Very stylish and skilfull hairdresser and disigner",
      img: "assets/kitchen.jpg"
    },

    {
      id: 4,
      icon: "assets/cyber odds.jpg",
      title: "Cybersport Bookie",
      descr: "An experienced Cybersport Bookie, knows a lot about Cybersport",
      img: "assets/lord palmerston.jpg"
    }
  ];

  const handleClick = (way) => {
    way === "left"
      ? setCurrentSlider(currentSlider > 0 ? currentSlider - 1 : 3)
      : setCurrentSlider(
          currentSlider < data.length - 1 ? currentSlider + 1 : 0
        );
  };

  return (
    <div className="works" id="works">
      <div
        className="slider"
        style={{ transform: `translateX(-${currentSlider * 100}vw)` }}
      >
        {data.map((d) => (
          <div className="container">
            <div className="item">
              <div className="left">
                <div className="leftContainer">
                  <div className="imgContainer">
                    <img src={d.icon} alt="" />
                  </div>
                  <h2>{d.title}</h2>
                  <p>{d.descr}</p>
                  <span>Projects</span>
                </div>
              </div>
              <div className="right">
                <img src={d.img} alt="" />
              </div>
            </div>
          </div>
        ))}
      </div>
      <img
        src="assets/arrow.png"
        className="arrow left"
        alt=""
        onClick={() => handleClick("left")}
      />
      <img
        src="assets/arrow.png"
        className="arrow right"
        alt=""
        onClick={() => handleClick("right")}
      />
    </div>
  );
}
