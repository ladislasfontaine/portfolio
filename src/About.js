import React from "react";
import "./App.css";
import "./About.css";
import FooterSentence from "./FooterSentence";

function About() {
  return (
    <div className="About">
      <div className="aboutSection">
        <div className="firstAboutSection">
          <h1 className="aboutTitle">
            Hi<span className="green">,</span> I<span className="green">'</span>m
            Ladislas<span className="green">.</span>
          </h1>
          <p className="subTitle green">
            Working hard to be a Fullstack Developer
          </p>
        </div>
      </div>

      <div className="aboutSection">
        <img
          src={process.env.PUBLIC_URL + "/about/about-bg-1.jpg"}
          alt="Man surfing"
          className="backgroundImage"
        />
        <div className="aboutSectionBackground" />
        <div className="aboutSectionContent">
          <div className="smallImageBackground">
            <img
              src={process.env.PUBLIC_URL + "/about/lad.png"}
              alt="Avatar"
              className="smallImage"
            />
          </div>
          <div className="aboutSectionText">
            <h5 className="green">Born and raised in</h5>
            <h4>France</h4>
          </div>
        </div>
      </div>

      <div className="aboutSection">
        <img
          src={process.env.PUBLIC_URL + "/about/about-bg-2.jpg"}
          alt="Man surfing"
          className="backgroundImage"
        />
        <div className="aboutSectionBackground" />
        <div className="aboutSectionContent">
          <div className="smallImageBackground">
            <img
              src={process.env.PUBLIC_URL + "/about/ieseg.png"}
              alt="Avatar"
              className="smallImage iesegLogo"
            />
          </div>
          <div className="aboutSectionText">
            <h5 className="green">Graduated from</h5>
            <h4 className="iesegName">IESEG Business School</h4>
          </div>
        </div>
      </div>

      <div className="aboutSection">
        <img
          src={process.env.PUBLIC_URL + "/about/about-bg-3.jpg"}
          alt="Man surfing"
          className="backgroundImage"
        />
        <div className="aboutSectionBackground" />
        <div className="aboutSectionContent">
          <div className="smallImageBackground">
            <img
              src={process.env.PUBLIC_URL + "/about/42_logo.png"}
              alt="Avatar"
              className="smallImage Logo42"
            />
          </div>
          <div className="aboutSectionText">
            <h5 className="green">Getting excited at</h5>
            <h4 className="iesegName">42 Paris</h4>
          </div>
        </div>
      </div>

      <div className="aboutSection">
        <img
          src={process.env.PUBLIC_URL + "/about/about-bg-4.jpg"}
          alt="Man surfing"
          className="backgroundImage"
        />
        <div className="aboutSectionBackground lighterBackground" />
        <div className="aboutSectionContent">
          <div className="aboutSectionText">
            <h5 className="green">Love building</h5>
            <h4>Websites & Softwares</h4>
          </div>
        </div>
      </div>

      <a
        href="mailto:fontaine.ladislas@gmail.com"
        rel="noopener noreferrer"
      >
        <div className="lastAboutSection">
          <p>Let's talk about your projects</p>
        </div>
      </a>

      <FooterSentence />
    </div>
  );
}

export default About;
