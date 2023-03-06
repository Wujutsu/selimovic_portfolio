import React from "react";
import Typewriter from "typewriter-effect";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { images } from "../../constants";

import "./Portfolio.scss";

const Portfolio = () => {
  const [ref1, isVisible1] = useInView({ threshold: 0.4 });
  const variantsVisibility = {
    visible: {
      opacity: 1,
    },
    hidden: {
      opacity: 0,
    },
  };

  return (
    <motion.div
      ref={ref1}
      variants={variantsVisibility}
      animate={isVisible1 ? "visible" : "hidden"}
      transition={{ duration: 0.5, ease: "linear" }}
      className="app_portfolio app-block"
      id="Portfolio"
    >
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
    </motion.div>
  );
};

export default Portfolio;
