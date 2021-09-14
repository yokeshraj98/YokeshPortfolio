import React from "react";
import { Link } from "react-scroll";
import "./TopContent.css";

const TopContent = () => {
  return (
    <div className="topContent">
      <div className="topContent__container">
        <h1>Mr.Yokeshwar Raj</h1>
        <p>A Professional Full Stack Developer</p>
        <a
          href="https://docs.google.com/document/d/1QQyVSfpvdiZb9uFJq8bHtmmABbSqkur2/edit"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="topContent__download">View CV</button>
        </a>
        <Link to="projects" smooth={true} duration={500}>
          <button className="topContent__work">My work</button>
        </Link>
      </div>
    </div>
  );
};

export default TopContent;
