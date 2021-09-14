import React from "react";
import { Element } from "react-scroll";
import TopContent from "../TopContent/TopContent";
import "./Topcontainer.css";

const Topcontainer = () => {
  return (
    <Element name="about" className="topContainer">
      <TopContent />
    </Element>
  );
};

export default Topcontainer;
