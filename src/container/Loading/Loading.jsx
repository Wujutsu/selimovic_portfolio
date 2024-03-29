import React, { useEffect, useState } from "react";
import { images } from "../../constants";

import "./Loading.scss";

const Loading = () => {
  return (
    <div className="app_loading">
      <div className="app_loading_start">
        <img className="logo-dimension app_loading_logo_rotation" src={images.logoTete} alt="logo" />
        <div className="app_loading_bar">
          <div className="app_loading_bar_progress"></div>
        </div>
      </div>
      <div className="app_loading_end">
        <div className="app_loading_logo1">
          <img className="logo-dimension app_loading_logo_rotation" src={images.logoTeteRotation1} alt="logo" />
        </div>
        <div className="app_loading_logo2">
          <img className="logo-dimension app_loading_logo_rotation" src={images.logoTete} alt="logo" />
        </div>
        <div className="app_loading_logo3">
          <img className="logo-dimension app_loading_logo_rotation" src={images.logoTeteRotation2} alt="logo" />
        </div>
        <div className="app_loading_prepare_navbar">
          <img className="logo-dimension app_loading_logo_rotation" src={images.logoTete} alt="logo" />
        </div>
      </div>
    </div>
  );
};

export default Loading;
