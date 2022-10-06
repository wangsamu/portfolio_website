import React from "react";
import "./experience.css";
import { BsShieldFillCheck } from "react-icons/bs";

const Experience = () => {
  return (
    <section id="experience">
      <h5>I'm confident using the following</h5>
      <h2>Technologies</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsShieldFillCheck className="experience__details-icon" />
              <div>
                <h4>HTML</h4>
                {/* <small>Experienced</small> */}
              </div>
            </article>
            <article className="experience__details">
              <BsShieldFillCheck className="experience__details-icon" />
              <div>
                <h4>CSS</h4>
                {/* <small>Experienced</small> */}
              </div>
            </article>
            <article className="experience__details">
              <BsShieldFillCheck className="experience__details-icon" />
              <div>
                <h4>JavaScript / Typescript</h4>
                {/* <small>Experienced</small> */}
              </div>
            </article>
            <article className="experience__details">
              <BsShieldFillCheck className="experience__details-icon" />
              <div>
                <h4>React</h4>
                {/* <small>Experienced</small> */}
              </div>
            </article>
            <article className="experience__details">
              <BsShieldFillCheck className="experience__details-icon" />
              <div>
                <h4>Styled Components</h4>
                {/* <small>Experienced</small> */}
              </div>
            </article>
            <article className="experience__details">
              <BsShieldFillCheck className="experience__details-icon" />
              <div>
                <h4>Redux</h4>
                {/* <small>Experienced</small> */}
              </div>
            </article>
          </div>
        </div>

        <div className="experience__backtend">
          <h3>Backend</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsShieldFillCheck className="experience__details-icon" />
              <div>
                <h4>PostgreSQL</h4>
                {/* <small>Experienced</small> */}
              </div>
            </article>
            <article className="experience__details">
              <BsShieldFillCheck className="experience__details-icon" />
              <div>
                <h4>MongoDB</h4>
                {/* <small>Experienced</small> */}
              </div>
            </article>
            <article className="experience__details">
              <BsShieldFillCheck className="experience__details-icon" />
              <div>
                <h4>Firebase</h4>
                {/* <small>Experienced</small> */}
              </div>
            </article>
            <article className="experience__details">
              <BsShieldFillCheck className="experience__details-icon" />
              <div>
                <h4>Node.js</h4>
                {/* <small>Experienced</small> */}
              </div>
            </article>
            <article className="experience__details">
              <BsShieldFillCheck className="experience__details-icon" />
              <div>
                <h4>Express</h4>
                {/* <small>Experienced</small> */}
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
