import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

import "./Services.scss";

const Services = () => {
  const [ref1, isVisible1] = useInView({ threshold: 0.4 });
  const [ref2, isVisible2] = useInView({ threshold: 0.3 });
  const variantsVisibility = {
    visible: {
      opacity: 1,
    },
    hidden: {
      opacity: 0,
    },
  };

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
            <div className="head-text center">Conception</div>
          </div>

          <div className="app_services_block center">
            <p className="center">
              Je prends le temps de bien comprendre tes objectifs et tes besoins, afin de planifier chaque étape du
              projet en fonction de tes contraintes. Je ne conçois pas <span className="bold">MON</span> projet, mais{" "}
              <span className="bold">TON</span> projet !
            </p>
          </div>
        </article>

        <motion.article whileInView={{ y: [50, 0] }} transition={{ duration: 1 }} className="jump">
          <div className="app_services_block ">
            <div className="head-text center">RÉALISATION</div>
          </div>
          <div className="app_services_block">
            <p className="center">
              Je suis fidèle à ta charte graphique et je mets en place tous les éléments nécessaires pour concrétiser
              ton projet, tout en respectant les spécifications que nous avons définies ensemble.
            </p>
          </div>
        </motion.article>

        <motion.article whileInView={{ y: [50, 0] }} transition={{ duration: 1 }} className="jump">
          <div className="app_services_block ">
            <div className="head-text center">AUTOMATISATION</div>
          </div>
          <div className="app_services_block">
            <p className="center">
              Grâce à des outils de création graphique ultra-simples à utiliser. Je te donne les moyens de décliner
              certains supports toi-même, sans avoir besoin de moi. Tu es autonome !
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
        {isVisible2 ? (
          <motion.div
            whileInView={{ y: [-150, 0] }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="app_services_schema_services"
          >
            <div className="line"></div>
            <div className="all_point">
              <div className="point">
                <div className="point_texte_conception">Conception</div>
              </div>
              <motion.div
                animate={{ y: [0, 300], scale: [1, 50] }}
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
        ) : (
          <motion.div
            whileInView={{ y: [0, -150] }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="app_services_schema_services"
          >
            <div className="line"></div>
            <div className="all_point">
              <div className="point">
                <div className="point_texte_conception"></div>
              </div>
              <motion.div
                animate={{ y: [0, 0], scale: [50, 1] }}
                transition={{ y: { duration: 1 }, scale: { duration: 1 } }}
                className="point"
              ></motion.div>
              <div className="point">
                <div className="point_texte_automatisation"></div>
              </div>
            </div>
          </motion.div>
        )}

        <article className="app_services_two_texte center">
          <p className="head-text">Voici les 5 étapes clés de mon processus</p>
          <p className="jump">
            <span>PRENDRE CONTACT</span>
            On discute du projet par téléphone ou par mail pour parler de tout ce qui est important (budget, brief,
            deadline…).
          </p>
          <p>
            <span>SE RENCONTRER</span>
            On se voit en personne ou en distanciel pour définir les objectifs du projet et discuter de votre vision
            pour le style souhaité.
          </p>
          <p>
            <span>MOODBOARD</span>Je crée plusieurs moodboards basés sur nos discussions pour vous donner une idée
            visuelle de ce que je pense pour votre projet.
          </p>
          <p>
            <span>RÉALISATION</span>Une fois que nous avons validé les trois premières étapes, je commence la
            réalisation de votre projet.
          </p>
          <p>
            <span>MODIFICATION</span>Je modifie la création en fonction de vos commentaires jusqu’à ce que nous
            trouvions le design parfait. Je suis là pour vous satisfaire !
          </p>
        </article>
      </motion.div>
    </div>
  );
};

export default Services;
