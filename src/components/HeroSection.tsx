import React from "react";
import "../App.css";
import { Button } from "./Button";
import "./HeroSection.css";

function HeroSection() {
  return (
    <div className="hero-container">
      <video src="/videos/video-2.mp4" autoPlay loop muted />
      <div className="container">
        <h1>Electronics and </h1>
        <br></br>
        <h1>Computer Science Club</h1>
        <p>UNIVERSITY OF KELANIYA</p>

        <div className="hero-btns">
          <Button
            className="btns"
            buttonStyle="btn--outline"
            buttonSize="btn--large"
          >
            JOIN US
          </Button>
          <Button
            className="btns"
            buttonStyle="btn--primary"
            buttonSize="btn--large"
          >
            PROJECTS <i className="far fa-play-circle" />
          </Button>
        </div>
        {/* <p>
          Let's Embrace the world of Hardware and Software, to create a
          sustainable future
        </p> */}
      </div>
    </div>
  );
}

export default HeroSection;
