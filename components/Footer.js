import React from "react";
import styles from "../styles/footer.module.css";
import Link from "next/link";

export default function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.contact}>
        <h3>Contact Me</h3>
        <input type="text" placeholder="email address" s />
        <br /> <br />
        <textarea
          type="text"
          placeholder="Enter your message"
          rows={5}
          //  cols={30}
        />
        <br /> <br />
        <button>Submit</button>
      </div>

      <div className={styles.links}>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/education">Education</Link>
          </li>

          <li>
            <Link href="/certifications">Certificates</Link>
          </li>
          <li>
            <Link href="/projects">Projects</Link>
          </li>
          <li>
            <Link href="/about"> About</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </div>
      <div className={styles.socialmedia}>
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

      <div className={styles.copyright}>
        <br />
        <p>&copy;2021 All rights reserved.</p>
      </div>
    </div>
  );
}
