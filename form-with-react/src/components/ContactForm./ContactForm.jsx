import React, { Component, useState } from "react";
import styles from "./ContactForm.module.css";
import { MdMessage } from "react-icons/md";
import { MdOutlineLocalPhone } from "react-icons/md";
import { IoMail } from "react-icons/io5";
import { Button } from "../button/button";
export const ContactForm = () => {
  const [name, setname] = useState("name");

  const [email, setemail] = useState("exapmle@email.com");
  const [text, settext] = useState("this is text area");

  const onSubmit = (event) => {
    event.preventDefault();

    // name = event.target[0].value;
    setname(event.target[0].value);
    setemail(event.target[1].value);
    settext(event.target[2].value);
  };
  return (
    <section className={styles.container}>
      <div className={styles.contact_form}>
        <div className={styles.top_btn}>
          <Button
            text="via SUPPORT CHAT"
            icon={<MdMessage fontSize="24px" />}
          ></Button>

          <Button
            text="via Call"
            icon={<MdOutlineLocalPhone fontSize="24px" />}
          ></Button>
        </div>

        <Button
          isOutline={true}
          text="via E-mail form"
          icon={<IoMail fontSize="24px" />}
        ></Button>
        <form onSubmit={onSubmit}>
          <div className={styles.form_control}>
            <label htmlFor="name">Name</label>
            <input type="text" name="name" />
          </div>
          <div className={styles.form_control}>
            <label htmlFor="email">Email</label>
            <input type="email" name="email" />
          </div>{" "}
          <div className={styles.form_control}>
            <label htmlFor="text">Text</label>
            <textarea name="text" rows={8} />
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "end",
            }}
          >
            <Button text="Submit"></Button>
          </div>
          <div>
            {"my name is " +
              name +
              " my email is , " +
              email +
              " and this is my feedback " +
              text}
          </div>
        </form>
      </div>

      <div className={styles.contact_image}>
        <img
          src="../../.././public/images/contact.svg"
          alt="/images.contact-imge"
        />
      </div>
    </section>
  );
};
