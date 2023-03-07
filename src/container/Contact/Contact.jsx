import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { images } from "../../constants";

import "./Contact.scss";

const Contact = () => {
  const [loading, setLoading] = useState(false);
  const [etatMail, setEtatMail] = useState(false);
  const form = useRef();

  function sendEmail(e) {
    setLoading(true);
    e.preventDefault();
    e.stopPropagation();

    emailjs
      .sendForm(
        "service_3evdvn9",
        "template_neojb8h",
        form.current,
        "ewmzmkvPafKkCbUVH"
      )
      .then(
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
    <div className="app_contact app-block" id="Contact">
      <div className="app_contact_block">
        <div className="app_contact_img">
          <img src={images.logoTete} alt="logo" />
        </div>
        <div className="app_contact_form">
          <form ref={form} onSubmit={sendEmail}>
            <div className="form_input">
              <input
                type="text"
                placeholder="Prénom/Nom"
                name="user_name"
                autoComplete="off"
                required
              />
            </div>
            <div className="form_input">
              <input
                type="email"
                placeholder="Email"
                name="user_email"
                autoComplete="off"
                required
              />
            </div>
            <div className="form_input">
              <input
                type="text"
                placeholder="Object du message"
                name="subject"
                autoComplete="off"
                required
              />
            </div>
            <div className="form_input">
              <textarea
                name="message"
                placeholder="Message"
                rows="8"
                autoComplete="off"
                required
              ></textarea>
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
        </div>
      </div>
      <div className="jump"></div>
    </div>
  );
};

export default Contact;
