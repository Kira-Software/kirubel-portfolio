import React, { useState } from "react";
import axios from "axios";
import styles from "../styles/contact.module.css";
import Head from "next/head";

export default function Contact() {
  const [formdata, setformdata] = useState({
    name: "",
    email: "",
    message: "",
  });

  const changer = (e) => {
    setformdata({ ...formdata, [e.target.name]: e.target.value });
  };
  async function handlesubmitform() {
    let config = {
      method: "post",
      url: "/api/contact",
      headers: {
        "Content-Type": "application/json",
      },
      data: formdata,
    };

    try {
      const response = await axios(config);
      console.log(response);
    } catch (err) {
      console.error(err);
    }
  }
  return (
    <div>
      <Head>
        <title>Contact me</title>
        <meta name="description" content="contact kirubel girmay " />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.top}>
        <h1>Contact</h1>
        <p>
          Don’t hesitate to reach out with the contact information below. Thank
          you!
        </p>
      </div>

      <div className={styles.left}>
        <h1>Get in Touch</h1>
        <div className={styles.icons}>
          <a href="https://www.facebook.com/kirubel.girmaye/">
            {" "}
            <img src="https://res.cloudinary.com/dh6muae8v/image/upload/v1640781175/fb_g4mvrg.png" />
          </a>
          <a href="https://www.linkedin.com/in/kirubel-girmay-886966175/">
            {" "}
            <img src="https://res.cloudinary.com/dh6muae8v/image/upload/v1640781175/linkedinlogo_lwzvrm.png" />
          </a>
          <a href="https://t.me/Kira_S_E">
            {" "}
            <img src="https://res.cloudinary.com/dh6muae8v/image/upload/v1640781178/telegramlogo_nabnin.png" />
          </a>

          <a href="https://twitter.com/Kirubel__G">
            <img src="https://res.cloudinary.com/dh6muae8v/image/upload/v1640781175/twitter_kzxsvc.png" />
          </a>

          <a href="https://github.com/Kira-Software">
            {" "}
            <img src="https://res.cloudinary.com/dh6muae8v/image/upload/v1640781175/GitHub-Mark_hsd3h3.png" />
          </a>

          <a href="https://www.instagram.com/kirubel_girmay/">
            {" "}
            <img src="https://res.cloudinary.com/dh6muae8v/image/upload/v1640781179/Insta3_uhhfqm.png" />
          </a>
        </div>
      </div>

      <div className={styles.right}>
        <h1>Send Me a Message</h1>
        <div className={styles.emailtel}>
          <a href="mailto: kirubelgirmay21@gmail.com?subject=Feedback">
            Send Email
          </a>
        </div>
        <br />
        <div className={styles.emailtel}>
          <a href="tel: +251947368849">Click to call</a>
        </div>
        <br />
      </div>
      {/* <form onSubmit={handlesubmitform}>
          <h1>Send Me a Message</h1>
          <label>
            <strong>Name</strong> (required)
          </label>
          <br />
          <input
            type="text"
            name="name"
            onChange={(e) => changer(e)}
            required
          />
          <br />
          <label>
            <strong>Email</strong> (required)
          </label>
          <br />
          <input
            type="email"
            name="email"
            onChange={(e) => changer(e)}
            required
          />
          <br />
          <label>
            <strong>Message</strong> (required)
          </label>
          <br />
          <textarea
            type="text"
            name="message"
            onChange={(e) => changer(e)}
            required
          />
          <br /> <br />
          <button type="submit">Submit</button>
        </form> */}
    </div>
  );
}
