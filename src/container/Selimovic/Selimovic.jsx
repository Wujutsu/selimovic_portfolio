import React from "react";
import { images } from "../../constants";

import "./Loading.scss";
import "./Presentation.scss";

const Loading = () => {
  return (
    <div className="app_selimovic">
      {/* Partie Loading (animation au chargement de la page) */}
      <div className="app_loading">
        <div className="app_loading_start">
          <img className="logo-dimension app_loading_logo_rotation" src={images.logoTete} alt="logo" />
          <div className="app_loading_bar">
            <div className="app_loading_bar_progress"></div>
          </div>
        </div>
        <div className="app_loading_end">
          <div className="app_loading_logo1">
            <img className="logo-dimension app_loading_logo_rotation" src={images.logoTete} alt="logo" />
          </div>
          <div className="app_loading_logo2">
            <img className="logo-dimension app_loading_logo_rotation" src={images.logoTete} alt="logo" />
          </div>
          <div className="app_loading_logo3">
            <img className="logo-dimension app_loading_logo_rotation" src={images.logoTete} alt="logo" />
          </div>
        </div>
      </div>

      {/* Partie Présentation (après le chargement de la page) */}
      <div className="app_presentation">Ok wp tu vas pouvoir commencer</div>
    </div>
  );
};

export default Loading;
