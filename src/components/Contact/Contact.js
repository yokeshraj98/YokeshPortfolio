import React from "react";
import { Element } from "react-scroll";
import { IconButton } from "@material-ui/core";
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import "./Contact.css";

const Contact = () => {
  return (
    <Element className="contact" id="contact">
      <h1>Contact</h1>
      <div className="contact__container">
        <p>
          Email: <span>yokeshh98@gmail.com</span>
        </p>
        <p>
          Github Username: <span>yokeshraj98</span>
        </p>
        <div className="contact__icons">
          <a href="https://www.linkedin.com/in/yokeshwar-raj-32821a154" target="_blank">
            <IconButton>
              <LinkedInIcon />
            </IconButton>
          </a>
          <a href="https://www.facebook.com/yokeshwar.raj" target="_blank">
            <IconButton>
              <FacebookIcon />
            </IconButton>
          </a>
          <a href="https://www.instagram.com/yokiyokith/" target="_blank">
            <IconButton>
              <InstagramIcon />
            </IconButton>
          </a>
        </div>
      </div>
    </Element>
  );
};

export default Contact;
