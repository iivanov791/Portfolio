import "../testimonials/testimonials.scss";

export default function Testimonials() {
  const data = [
    {
      id: 1,
      name: "Xi Jinping",
      title: "CEO of China",
      img: "assets/Xi.jpg",
      icon: "assets/facebook.png",
      desc: "Speaking chinese, impossible to understand"
    },
    {
      id: 2,
      name: "Donald Trump",
      title: "ex-CEO of USA",
      img: "assets/trump.jpg",
      icon: "assets/twitter.png",
      desc:
        "I love this guy, he is the best in whatever he is doing. Just trust him your issue and you will know no troubles",
      featured: true
    },
    {
      id: 3,
      name: "Oleksandr Musiienko",
      title: "CEO of Center of Law and Military Researches",
      img: "assets/musiienko.jpg",
      icon: "assets/linkedin.png",
      desc:
        "I know him, he is good, believe me. You will suffer no troubles with him"
    }
  ];

  return (
    <div className="testimonials" id="testimonials">
      <h1>Testimonials</h1>
      <div className="container">
        {data.map((d) => (
          <div className={d.featured ? "featured card" : "card"}>
            <div className="top">
              <img className="left" src="assets/right arrow.png" alt="" />
              <img className="user" src={d.img} alt="" />
              <img className="right" src={d.icon} alt="" />
            </div>
            <div className="center">{d.desc}</div>
            <div className="bottom">
              <h3>{d.name}</h3>
              <h4>{d.title}</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
