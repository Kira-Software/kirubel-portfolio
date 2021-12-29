import Head from "next/head";
import React from "react";
import styles from "../styles/about.module.css";
export default function about() {
  return (
    <div className={styles.about}>
      <Head>
        <title>About me</title>
        <meta name="description" content=" about kirubel girmay " />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>About Me</h1>

      <img src="https://res.cloudinary.com/dh6muae8v/image/upload/v1640780390/my2_mvoahv.png" />
      <div className={styles.contents}>
        <div className={styles.key}>
          <h2>Skills</h2>
          <ul>
            <li>JavaScript | Typescript</li>
            <li>React | Redux | Redux Saga | Hooks | Context</li>
            <li>Vue.js | Nuxt.js | Vuex</li>
            <li>Hasura</li>
            <li>Node JS | Express.js</li>
            <li>MongoDB | MySQL | PostgreSQL</li>
            <li>HTML</li>
            <li>
              {" "}
              CSS | Material UI | Tailwind CSS |Bootstrap | Vuetify | Styled
              Components
            </li>
            <li>REST | GraphQL</li>
            <li>WordPress</li>
            <li>Git | GitHub</li>
            <li>Docker</li>
            <li>Java</li>
            <li>C++</li>
          </ul>
        </div>
        <div className={styles.key}>
          <h2>Key Competencies</h2>
          <ul>
            <li>Proficient in front end, back end and integration.</li>
            <li>Adaptable and able to quickly pick up new technologies.</li>
            <li>Solid understanding of software development life cycles.</li>
            <li>Work collaborately with a team.</li>
            <li>Adaptable for any type of working positions.</li>
            <li>
              Able to organize own workload effectively and prioritize tasks.
            </li>
            <li>
              Can manage multiple projects in a fast-paced deadline-driven
              environment.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
