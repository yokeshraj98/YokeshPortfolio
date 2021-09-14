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
          href="https://mail.google.com/mail/u/0?ui=2&ik=229bda3c71&attid=0.1&permmsgid=msg-a:r2678336536277390252&view=att&disp=safe&realattid=f_ktjuy0nx0"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="topContent__download">DOWNLOAD CV</button>
        </a>
        <Link to="projects" smooth={true} duration={500}>
          <button className="topContent__work">My work</button>
        </Link>
      </div>
    </div>
  );
};

export default TopContent;
