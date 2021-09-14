import React from "react";
import { useState } from "react";
import "./Projects.css";

const Projects = ({ img, title, description, link }) => {
  const [show, setShow] = useState(false);
  return (
    <a href={link} target="_blank">
      <div
        className="project"
        onMouseEnter={() => setShow(true)}
        onMouseLeave={() => setShow(false)}
      >
        {show ? (
          <div className="project__content">
            <h4>{title}</h4>
            <p>{description}</p>
          </div>
        ) : (
          <img src={img} alt="" />
        )}
      </div>
    </a>
  );
};

export default Projects;
