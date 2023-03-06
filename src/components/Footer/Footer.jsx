import React from "react";

import "./Footer.scss";

const Footer = () => {
  const actualYear = new Date().getFullYear();

  return <div className="app__footer">Selimovic ©{actualYear}</div>;
};

export default Footer;
