import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { images } from "../../constants";

import "./Contact.scss";

const Contact = () => {
  const [etatMail, setEtatMail] = useState(false);
  const form = useRef();

  function sendEmail(e) {
    e.preventDefault();
    e.stopPropagation();

    emailjs.sendForm("service_umr0jrb", "template_ogb1vah", form.current, "sPOp903ySHVjVmY-E").then(
      (result) => {
        setEtatMail(true);
      },
      (error) => {
        setEtatMail(false);
        console.log(error.text);
      }
    );

    e.target.reset();
  }

  return (
    <div className="app_contact app-block" id="Contacts">
      <div className="app_contact_block">
        <div className="app_contact_img">
          <img src={images.logoTete} alt="logo" />
        </div>
        <div className="app_contact_form">
          <form ref={form} onSubmit={sendEmail}>
            <div>
              <input type="text" placeholder="Prénom/Nom" name="user_name" autoComplete="off" required />
            </div>
            <div>
              <input type="email" placeholder="Email" name="user_email" autoComplete="off" required />
            </div>
            <div>
              <input type="text" placeholder="Object du message" name="subject" autoComplete="off" required />
            </div>
            <div>
              <textarea name="message" placeholder="Message" rows="8" autoComplete="off" required></textarea>
            </div>
            {!etatMail && <button>Envoyer</button>}
          </form>
          {etatMail && <div className="message_succes">Message envoyé !</div>}
        </div>
      </div>
      <div className="jump"></div>
    </div>
  );
};

export default Contact;
