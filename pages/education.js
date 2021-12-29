import Head from "next/head";
import React from "react";
import styles from "../styles/education.module.css";
export default function education() {
  return (
    <div className={styles.education}>
      <Head>
        <title>Education</title>
        <meta name="description" content="kirubel girmay portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.logo}>
        <img src="https://res.cloudinary.com/dh6muae8v/image/upload/v1640780349/aastu_mpr0io.jpg" />
      </div>
      <div className={styles.discription}>
        <h3>B.Sc degree </h3>
        <h2>Software Engineering </h2>
        <h3> Addis Ababa Science and Technology University </h3>
        <h3> CGPA 3.71 </h3>
      </div>

      <div className={styles.tempo}>
        <img src="https://res.cloudinary.com/dh6muae8v/image/upload/v1640780393/tempo_nwqegg.jpg" />
      </div>

    </div>
  );
}
