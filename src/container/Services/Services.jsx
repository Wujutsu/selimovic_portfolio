import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { images } from "../../constants";

import "./Services.scss";

const Services = () => {
  const [widthWindows, setWidthWindows] = useState(0);
  const [valThreshold1, setValThreshold1] = useState(0);
  const [valThreshold2, setValThreshold2] = useState(0);
  const [ref1, isVisible1] = useInView({ threshold: valThreshold1 });
  const [ref2, isVisible2] = useInView({ threshold: valThreshold2 });
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
    widthWindows > 600 ? setValThreshold1(0.5) : setValThreshold1(0.4);
    widthWindows > 600 ? setValThreshold2(0.4) : setValThreshold2(0.3);
  }

  useEffect(() => {
    updateSizeWidthWindows();
  }, []);

  window.addEventListener("resize", () => {
    updateSizeWidthWindows();
  });

  return (
    <div className="app_services">
      <motion.div
        ref={ref1}
        variants={variantsVisibility}
        animate={isVisible1 ? "visible" : "hidden"}
        transition={{ duration: 0.5, ease: "linear" }}
        className="app_services_one app-block"
        id="Services"
      >
        <article>
          <div className="app_services_block ">
            <div className="app_services_block_point hideElement">
              <div className="app_services_show_point"></div>
            </div>
            <div className="head-text center">Conception</div>
          </div>

          <div className="app_services_block center">
            <div className="app_services_block_point">
              <div className="app_services_show_point"></div>
            </div>
            <p className="center">
              Après m’être assuré d’avoir compris vos objectifs et d’avoir déterminer les éléments nécessaires à la
              réalisation du projet, je planifie les différentes étapes de celui-ci en fonction des contraintes
              imposées. Je conçois <span className="bold">VOTRE</span> projet en fonction de{" "}
              <span className="bold">VOS</span> besoins
            </p>
          </div>
        </article>

        <motion.article whileInView={{ y: [50, 0] }} transition={{ duration: 1 }} className="jump">
          <div className="app_services_block ">
            <div className="app_services_block_point hideElement">
              <div className="app_services_show_point"></div>
            </div>
            <div className="head-text center">RÉALISATION</div>
          </div>
          <div className="app_services_block">
            <div className="app_services_block_point">
              <div className="app_services_show_point"></div>
            </div>
            <p className="center">
              En respectant et en m’imprégnant de votre charte graphique, je mets en œuvre les éléments nécessaires à la
              réalisation du projet, tout en respectant les spécifications définies lors de la phase de conception.
            </p>
          </div>
        </motion.article>

        <motion.article whileInView={{ y: [50, 0] }} transition={{ duration: 1 }} className="jump">
          <div className="app_services_block ">
            <div className="app_services_block_point hideElement">
              <div className="app_services_show_point"></div>
            </div>
            <div className="head-text center">AUTOMATISATION</div>
          </div>
          <div className="app_services_block">
            <div className="app_services_block_point">
              <div className="app_services_show_point"></div>
            </div>
            <p className="center">
              Via la mise en place de logiciels de création graphique très simple d’utilisation, je m’assure de vous
              donner la possibilité de décliner certains supports vous-même, et sans mon intervention !
            </p>
          </div>
        </motion.article>
      </motion.div>

      <motion.div
        ref={ref2}
        variants={variantsVisibility}
        animate={isVisible2 ? "visible" : "hidden"}
        transition={{ duration: 0.5, ease: "linear" }}
        className="app_services_two app-block"
      >
        {isVisible2 && (
          <motion.div
            whileInView={{ y: [-100, 0] }}
            transition={{ duration: 0.5 }}
            className="app_services_schema_services"
          >
            <div className="line"></div>
            <div className="all_point">
              <div className="point">
                <div className="point_texte_conception">Conception</div>
              </div>
              <motion.div
                animate={{ y: [0, 250], scale: [1, 50] }}
                transition={{
                  y: { duration: 1, delay: 0.5 },
                  scale: { duration: 1, delay: 1 },
                }}
                className="point"
              >
                <div className="point_texte_realisation">Réalisation</div>
              </motion.div>
              <div className="point">
                <div className="point_texte_automatisation">Automatisation</div>
              </div>
            </div>
          </motion.div>
        )}
        {!isVisible2 && (
          <div className="app_services_schema_services">
            <div className="line"></div>
            <div className="all_point">
              <div className="point">
                <div className="point_texte_conception">Conception</div>
              </div>
              <motion.div animate={{ y: [200, 0], scale: [50, 1] }} transition={{ duration: 5 }} className="point">
                <div className="point_texte_realisation">Réalisation</div>
              </motion.div>
              <div className="point">
                <div className="point_texte_automatisation">Automatisation</div>
              </div>
            </div>
          </div>
        )}

        <article className="app_services_two_texte center">
          <p className="head-text">
            De la prise de contact à la réalisation finale, 5 étapes importantes pour répondre à vos besoins :
          </p>
          <p className="bold jump">
            1. Échange par téléphone ou par mail fin de discuter du projet dans la globalité (budget, brief, deadline…).
          </p>
          <p className="bold">
            2. Organisation d’une réunion physique ou en distanciel pour définir les objectifs du projet, ainsi que pour
            connaitre votre vision sur le style souhaité.
          </p>
          <p className="bold">3. Réalisation de différents moodboard basé sur nos discussions.</p>
          <p className="bold">4. Une fois les 3 premières étapes validées : Début de la réalisation</p>
          <p className="bold">
            5. Modification de la création en fonction de vos commentaires, jusqu’à trouver le design parfait.
          </p>
        </article>
      </motion.div>
    </div>
  );
};

export default Services;
