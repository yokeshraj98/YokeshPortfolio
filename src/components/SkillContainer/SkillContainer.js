import React from "react";
import { Element } from "react-scroll";
import skillImg from "../../assests/skill.jpg";
import { LinearProgress } from "@material-ui/core";
import "./SkillContainer.css";

const SkillContainer = () => {
  return (
    <Element className="skillContainer" name="skills">
      <div className="skillContainer__image">
        <img src={skillImg} alt="" />
      </div>
      <div className="skillContainer__text">
        <h2>SKILLSET</h2>
        <div className="skillContainer__skillset">
          <h5>HTML</h5>
          <div className="skillContainer__slider skillContainer__slider1">
            <LinearProgress variant="determinate" value={80} />
          </div>
        </div>
        <div className="skillContainer__skillset">
          <h5>CSS</h5>
          <div className="skillContainer__slider skillContainer__slider2">
            <LinearProgress variant="determinate" value={80} />
          </div>
        </div>
        <div className="skillContainer__skillset">
          <h5>React</h5>
          <div className="skillContainer__slider skillContainer__slider3">
            <LinearProgress variant="determinate" value={75} />
          </div>
        </div>
        <div className="skillContainer__skillset">
          <h5>JAVASCRIPT</h5>
          <div className="skillContainer__slider skillContainer__slider4">
            <LinearProgress variant="determinate" value={85} />
          </div>
        </div>
        <div className="skillContainer__skillset">
          <h5>NODE JS</h5>
          <div className="skillContainer__slider skillContainer__slider5">
            <LinearProgress variant="determinate" value={70} />
          </div>
        </div>
        <div className="skillContainer__skillset">
          <h5>MY SQL</h5>
          <div className="skillContainer__slider skillContainer__slider6">
            <LinearProgress variant="determinate" value={60} />
          </div>
        </div>
        <div className="skillContainer__skillset">
          <h5>MONGO DB</h5>
          <div className="skillContainer__slider skillContainer__slider7">
            <LinearProgress variant="determinate" value={60} />
          </div>
        </div>
      </div>
    </Element>
  );
};

export default SkillContainer;
