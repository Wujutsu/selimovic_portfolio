import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { images } from "../../constants";

import "./Selimovic.scss";

const Selimovic = () => {
  const [widthWindows, setWidthWindows] = useState(0);
  const [ref1, isVisible1] = useInView({ threshold: 0.5 });
  const [ref2, isVisible2] = useInView({ threshold: 0.5 });
  const variantsVisibility = {
    visible: {
      opacity: 1,
    },
    hidden: {
      opacity: 0,
    },
  };

  function updateSizeWidthWindows() {
    setWidthWindows(document.documentElement.clientWidth + 17);
  }

  useEffect(() => {
    updateSizeWidthWindows();
  }, []);

  window.addEventListener("resize", () => {
    updateSizeWidthWindows();
  });

  return (
    <div id="Selimovic">
      <motion.div
        ref={ref1}
        variants={variantsVisibility}
        animate={isVisible1 ? "visible" : "hidden"}
        transition={{ duration: 0.5, ease: "linear" }}
        className="app_selimovic_presentation app-block"
      >
        <article>
          <div className="head-text">
            Hello, moi c'est <span>Selimovic</span>
          </div>
          <div className="head-text">
            Je suis <span>Graphic Designer</span>
          </div>
          <div className="head-text">
            En <span>Freelance</span>
          </div>

          <p className="italic jump">
            “Une identité visuelle forte est cruciale pour toute entreprise qui souhaite se démarquer et gagner en
            visibilité.”
          </p>

          <p>
            En tant que graphic designer, je mets tout mon savoir-faire et mon expérience au service de mes clients pour
            leur créer une identité visuel percutante et en accord avec leur image. (Charte graphique, logotype,
            affiche, flyers, réseaux sociaux …).
          </p>

          <p>
            Je travaille en étroite collaboration avec mes clients pour comprendre leurs besoins et leur offrir un
            service personnalisé.
          </p>
        </article>
      </motion.div>

      <motion.div
        ref={ref2}
        variants={variantsVisibility}
        animate={isVisible2 ? "visible" : "hidden"}
        transition={{ duration: 0.5, ease: "linear" }}
        className="app_selimovic_quisuisje app-block"
      >
        <article>
          <div className="head-text">Qui suis-je ?</div>
          <p>
            Hey toi ! Si tu regardes {widthWindows > 900 ? `à ta droite` : `en bas`}, tu vois un moustachu plein de
            talent et de passion, c'est moi ! Depuis mon adolescence, je suis obsédé par le design et j'ai passé des
            années à créer des identités visuelles de folie.
          </p>

          <p>
            Après avoir décroché mon baccalauréat, j'ai foncé dans le monde de la communication et du marketing pour
            apprendre la communication et continuer le design en autodidacte.
          </p>

          <p>
            Maintenant, avec une licence et un début de Master en design dans ma poche, je suis fier de travailler à
            temps plein en freelance.
          </p>

          <p>
            J'ai déjà eu la chance de travailler avec des clients aux besoins variés, alors n'hésite pas à me contacter
            pour discuter d'une collaboration potentielle. Je suis prêt à relever tous les défis !
          </p>
        </article>
        {isVisible2 && (
          <motion.div
            whileInView={{ x: [300, 0], y: [-100, 0], scale: [1.8, 1], opacity: [0, 1] }}
            transition={{ duration: 0.8 }}
            className="app_selimovic_quisuisje_img"
          >
            <motion.img
              animate={{ rotate: [0, -10, 0, 10, 0, -10, 0] }}
              transition={{ duration: 1.5, ease: "linear", delay: 0.8 }}
              src={images.logoTete}
              alt="Le moustatchu, c'est moi"
            />
          </motion.div>
        )}
        {!isVisible2 && (
          <motion.div
            whileInView={{ x: [0, 300], y: [0, -100], scale: [1, 1.8], opacity: [1, 0] }}
            transition={{ duration: 0.8 }}
            className="app_selimovic_quisuisje_img"
          >
            <img src={images.logoTete} alt="Le moustatchu, c'est moi" />
          </motion.div>
        )}
      </motion.div>
    </div>
  );
};

export default Selimovic;
