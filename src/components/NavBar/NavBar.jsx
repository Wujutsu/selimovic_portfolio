import React, { useEffect, useState } from "react";
import { HiMenuAlt4, HiX } from "react-icons/hi";
import { motion } from "framer-motion";

import { images } from "../../constants";
import "./NavBar.scss";

const NavBar = () => {
  const [showNav, setShowNav] = useState(false);
  const [toggle, setToggle] = useState(false);
  const menu = ["Selimovic", "Portfolio", "Services", "Contact"];
  const [scrollTop, setScrollTop] = useState(0);
  const [scrollSelectNav, setScrollSelectNav] = useState("Selimovic");

  function calcScrollPos() {
    const winScroll = document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;

    const scrolled = (winScroll * 100) / height;

    setScrollTop(scrolled);

    //console.log("pos => ", scrollTop);
  }

  function navBarSelect() {
    if (scrollTop >= 0 && scrollTop < 33) {
      setScrollSelectNav("Selimovic");
    } else if (scrollTop >= 33 && scrollTop < 51) {
      setScrollSelectNav("Portfolio");
    } else if (scrollTop >= 51 && scrollTop < 95) {
      setScrollSelectNav("Services");
    } else {
      setScrollSelectNav("Contact");
    }
  }

  window.addEventListener("scroll", () => {
    calcScrollPos();
    navBarSelect();
  });

  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <motion.img
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 1, delay: 4.5, ease: "linear" }}
          className="logo-dimension"
          src={images.logoTete}
          alt="logo"
          onClick={() => setShowNav(!showNav)}
        />
        {!showNav ? (
          <motion.ul
            whileInView={{ width: [40, 60, 40] }}
            transition={{ duration: 2, delay: 0, repeat: Infinity }}
            className="app__navbar-links-empty"
          ></motion.ul>
        ) : (
          <motion.ul
            whileInView={{ width: [40, 750] }}
            transition={{ duration: 2, delay: 0 }}
            className="app__navbar-links"
          >
            {menu.map((item, index) =>
              item == scrollSelectNav ? (
                <li style={{ backgroundColor: `black` }} key={`link-${item}`}>
                  <a style={{ color: `white` }} href={`#${item}`} aria-label="Redirect menu">
                    {item}
                  </a>
                </li>
              ) : (
                <li key={`link-${item}`}>
                  <a href={`#${item}`} aria-label="Redirect menu">
                    {item}
                  </a>
                </li>
              )
            )}
          </motion.ul>
        )}
      </div>

      <div className="app__navbar-menu">
        <a href="#Selimovic" onClick={() => setToggle(true)} aria-label="Redirect Accueil">
          <motion.img
            animate={{ scale: [1, 1.5, 1] }}
            transition={{ duration: 2, delay: 4.5, ease: "linear" }}
            className="logo-dimension"
            src={images.logoTete}
            alt="logo"
          />
        </a>

        {toggle && (
          <motion.div whileInView={{ x: [300, 0] }} transition={{ duration: 0, ease: "easeOut" }}>
            <HiX onClick={() => setToggle(false)} />
            <ul>
              {menu.map((item) => (
                <li key={item}>
                  <a
                    href={`#${item}`}
                    onClick={() => setToggle(false)}
                    className="head-text"
                    aria-label="Redirect menu"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
