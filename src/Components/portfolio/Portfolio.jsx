import React from "react";
import "./portfolio.css";
//import portfolio images here
import ARKANOID from "../../assets/arkanoid.png";
import CALCULATOR from "../../assets/calculator.png";
import CHATAPP from "../../assets/chatapp.png";
import DRUM_MACHINE from "../../assets/drum_machine.png";
import ECOMMERCE from "../../assets/ecommerce.png";
import QUOTE_MACHINE from "../../assets/quote_machine.png";

const portfolioItems = [
  {
    id: 1,
    //insert portfolio image or gif here
    image: ARKANOID,
    title: "React Arkanoid",
    github: "https://github.com/wangsamu/react-arkanoid",
    demo: "https://github.com/wangsamu/react-arkanoid",
  },
  {
    id: 2,
    image: ECOMMERCE,
    title: "React e-commerce",
    github: "https://github.com/wangsamu/ecommerce_react_firebase",
    demo: "https://ecommreactfirebase.netlify.app/",
  },
  {
    id: 3,
    image: CHATAPP,
    title: "Chat App",
    github: "https://github.com/wangsamu/chatapp-react-firebase",
    demo: "https://chatapp.wangsamu.com/",
  },
  {
    id: 4,
    image: CALCULATOR,
    title: "React Calculator",
    github: "https://codepen.io/wangsamu/pen/QWmPOwN",
    demo: "https://codepen.io/wangsamu/full/QWmPOwN",
  },
  {
    id: 5,
    image: DRUM_MACHINE,
    title: "Drum Machine",
    github: "https://codepen.io/wangsamu/pen/MWVZXVO",
    demo: "https://codepen.io/wangsamu/full/MWVZXVO",
  },
  {
    id: 6,
    image: QUOTE_MACHINE,
    title: "Random Quote Machine",
    github: "https://codepen.io/wangsamu/pen/rNdqxew",
    demo: "https://codepen.io/wangsamu/full/rNdqxew",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My projects</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {portfolioItems.map(({ id, image, title, github, demo }) => {
          return (
            <article className="portfolio__item" key={id}>
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a href={github} className="btn" target="_blank">
                  Github
                </a>
                <a href={demo} className="btn btn-primary" target="_blank">
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
