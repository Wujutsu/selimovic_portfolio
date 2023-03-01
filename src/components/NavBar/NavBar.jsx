import React, { useState } from "react";
import { HiMenuAlt4, HiX } from "react-icons/hi";
import { motion } from "framer-motion";

import { images } from "../../constants";
import "./NavBar.scss";

const NavBar = () => {
  const [toggle, setToggle] = useState(false);
  const menu = ["Selimovic", "Portfolio", "Services", "Contacts"];

  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <a href="#Selimovic" aria-label="Redirect Accueil">
          <img className="logo-dimension" src={images.logoTete} alt="logo" />
        </a>
        <ul className="app__navbar-links">
          {menu.map((item, index) => (
            <li key={`link-${item}`}>
              <a href={`#${item}`} aria-label="Redirect menu">
                {item}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/*
      <div className="app__navbar-menu">
        <HiMenuAlt4 onClick={() => setToggle(true)} />

        {toggle && (
          <motion.div
            whileInView={{ x: [300, 0] }}
            transition={{ duration: 0, ease: "easeOut" }}
          >
            <HiX onClick={() => setToggle(false)} />
            <ul>
              {[
                "Accueil",
                "À propos",
                "Réalisations",
                "Compétences",
                "Contact",
              ].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item}`}
                    onClick={() => setToggle(false)}
                    aria-label="Redirect menu"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </div>*/}
    </nav>
  );
};

export default NavBar;
