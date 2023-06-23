"use client";
import React from "react";
import Image from "next/image";
import styles from "./contactForm.module.css";
import imageContact from "public/content/3.jpg";

const ContactForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const dataForm = Object.fromEntries(new window.FormData(e.target));
    console.log(dataForm);
  };
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Lorems `s sasds</h1>
      <div className={styles.content}>
        <div className={styles.imgContainer}>
          <Image src={imageContact} alt="" fill={true} className={styles.img} />
        </div>
        <form onSubmit={handleSubmit} className={styles.form}>
          <input
            required
            name="name"
            type="text"
            placeholder="name"
            className={styles.input}
          />
          <input
            required
            name="email"
            type="email"
            placeholder="email"
            className={styles.input}
          />
          <textarea
            required
            name="message"
            className={styles.textarea}
            placeholder="message"
            cols={10}
            rows={3}
            maxLength={255}
          />
          <button type="submit" className="btn">
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
