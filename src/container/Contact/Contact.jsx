import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import emailjs from "@emailjs/browser";
import { images } from "../../constants";

import "./Contact.scss";

const Contact = () => {
  const [loading, setLoading] = useState(false);
  const [etatMail, setEtatMail] = useState(false);
  const [ref1, isVisible1] = useInView({ threshold: 0.4 });
  const form = useRef();

  const variantsVisibility = {
    visible: {
      opacity: 1,
    },
    hidden: {
      opacity: 0,
    },
  };

  function sendEmail(e) {
    setLoading(true);
    e.preventDefault();
    e.stopPropagation();

    emailjs.sendForm("service_kzvpm3f", "template_6i3p6km", form.current, "uCKf9oEw1gkIEFiLc").then(
      (result) => {
        setLoading(false);
        setEtatMail(true);
      },
      (error) => {
        setLoading(false);
        setEtatMail(false);
        console.log(error.text);
      }
    );

    e.target.reset();
  }

  return (
    <motion.div
      ref={ref1}
      variants={variantsVisibility}
      animate={isVisible1 ? "visible" : "hidden"}
      transition={{ duration: 0.5, ease: "linear" }}
      className="app_contact app-block"
      id="Contact"
    >
      <div className="app_contact_block">
        <div className="app_contact_img">
          <motion.img whileHover={{ rotate: 10 }} src={images.logoTete} alt="logo" />
        </div>
        <div className="app_contact_form">
          <form ref={form} onSubmit={sendEmail}>
            <div className="form_input">
              <input type="text" placeholder="Prénom/Nom" name="user_name" autoComplete="off" required />
            </div>
            <div className="form_input">
              <input type="email" placeholder="Email" name="user_email" autoComplete="off" required />
            </div>
            <div className="form_input">
              <input type="text" placeholder="Object du message" name="subject" autoComplete="off" required />
            </div>
            <div className="form_input">
              <textarea name="message" placeholder="Message" rows="8" autoComplete="off" required></textarea>
            </div>
            {!loading && !etatMail && <button>Envoyer</button>}
            {loading && (
              <div className="lds-ellipsis">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
              </div>
            )}
          </form>
          {etatMail && <div className="message_succes">Message envoyé !</div>}

          <div className="app_contact_reseaux">
            <a
              href="https://www.instagram.com/selimovicdesign/"
              aria-label="redirect insta"
              target="_blank"
              rel="noreferrer"
            >
              <img src={images.logoInsta} alt="logo insta" />
            </a>
            <a
              href="https://www.linkedin.com/in/s%C3%A9lim-nidbouhou-a1852821a/"
              aria-label="redirect linkedin"
              target="_blank"
              rel="noreferrer"
            >
              <img src={images.logoLinkedin} alt="logo linkedin" />
            </a>
          </div>
        </div>
      </div>

      <div className="jump"></div>
    </motion.div>
  );
};

export default Contact;
