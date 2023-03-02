import React from "react";
import Typewriter from "typewriter-effect";
import { images } from "../../constants";

import "./Portfolio.scss";

const Portfolio = () => {
  return (
    <div className="app_portfolio app-block" id="Portfolio">
      <div className="app_portfolio_block">
        <div className="app_portfolio_img">
          <img src={images.cadreGoogle} alt="cadre google" />
        </div>
        <div className="app_portfolio_texte">
          <Typewriter options={{ autoStart: true, loop: true, delay: 100, strings: ["Portfolio selimovic"] }} />
        </div>
        <div className="app_portfolio_btn">
          <a href="#Services" alt="redirection service">
            <button>Cliquez ici</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
