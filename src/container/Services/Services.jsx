import React from "react";
import { images } from "../../constants";

import "./Services.scss";

const Services = () => {
  return (
    <div className="app_services app-block" id="Services">
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
            réalisation du projet, je planifie les différentes étapes de celui-ci en fonction des contraintes imposées.
            Je conçois <span className="bold">VOTRE</span> projet en fonction de <span className="bold">VOS</span>{" "}
            besoins
          </p>
        </div>
      </article>

      <article className="jump">
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
      </article>

      <article className="jump">
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
      </article>
    </div>
  );
};

export default Services;
