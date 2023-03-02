import React, { useEffect, useState } from "react";
import { images } from "../../constants";

import "./Selimovic.scss";

const Selimovic = () => {
  const [widthWindows, setWidthWindows] = useState(0);

  useEffect(() => {
    onResize();
  }, []);

  function onResize() {
    setWidthWindows(document.documentElement.clientWidth + 17);
  }

  window.addEventListener("resize", onResize);

  return (
    <div className="app_selimovic" id="Selimovic">
      <div className="app_selimovic_presentation app-block">
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

          <p className="italic bold jump">
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
      </div>

      <div className="app_selimovic_quisuisje app-block">
        <article>
          <div className="head-text">Qui suis-je ?</div>
          <p>
            Le moustachu {widthWindows > 1000 ? `à ta droite` : `en bas`}, c’est moi ! Passionné par le design depuis
            mon adolescence, je réalise des identités visuelles depuis très longtemps.
          </p>

          <p>
            Après avoir obtenu mon baccalauréat, cap sur le monde de la communication et du marketing, pour me former au
            monde professionnel tout en continuant d’apprendre le design en autodidacte.
          </p>

          <p>
            C’est donc avec une licence en poche (et un début de Master en design) que je me consacre aujourd’hui à
            temps plein à mon activité de freelance.
          </p>

          <p>
            Ayant déja eu la chance de travailler pour pour des clients aux besoins variés, je me tiens à votre
            disposition pour échanger avec vous sur une potentielle future collaboration.
          </p>
        </article>
        <div className="app_selimovic_quisuisje_img">
          <img src={images.logoTete} alt="Le moustatchu, c'est moi" />
        </div>
      </div>
    </div>
  );
};

export default Selimovic;
