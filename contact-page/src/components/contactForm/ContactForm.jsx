import React from "react";
import styles from "../contactForm/ContactForm.module.css";
import Button from "../button/Button";
import { TiMessages } from "react-icons/ti";
import { FaPhone } from "react-icons/fa6";

const ContactForm = () => {
  return (
    <section className={styles.container}>
      <div className={styles.contact_form}>
        <div className={styles.top_btn}>
          <Button text="VIA SUPPORT CHAT" icon={<TiMessages />} />

          <Button text="VIA CALL" icon={<FaPhone />} />
        </div>
        <Button isOutline={true} text="VIA EMAIL FORM" icon={<TiMessages />} />

        <form action="#">
          <div className={styles.form_control}>
            <label htmlFor="name">Name</label>
            <input type="text" name="name" id="name" />
          </div>

          <div className={styles.form_control}>
            <label htmlFor="email">Email</label>
            <input type="text" name="email" id="email" />
          </div>

          <div className={styles.form_control}>
            <label htmlFor="text">Text</label>
            <textarea name="text" id="text" rows="10" />
          </div>
          <div style={{display: "flex", justifyContent : "end"}}>
            <Button text="SUBMIT" />
          </div>
        </form>
      </div>
      <div className={styles.contact_image}>
        <img src="/src/pictures/second.svg" alt="" />
      </div>
    </section>
  );
};

export default ContactForm;
