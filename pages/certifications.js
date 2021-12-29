import Head from "next/head";
import React from "react";
import styles from "../styles/certifications.module.css";

export default function certifications() {
  return (
    <div className={styles.certifications}>
      <Head>
        <title>Certifications</title>
        <meta name="description" content="kirubel girmay Certifications" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>Certificates</h1>
      <div className={styles.certificatecard}>
        <img src="https://res.cloudinary.com/dh6muae8v/image/upload/v1640780378/dereja_xtxkab.jpg" />
        <img src="https://res.cloudinary.com/dh6muae8v/image/upload/v1640780383/abina_abpfea.jpg" />
        <img src="https://res.cloudinary.com/dh6muae8v/image/upload/v1640780388/hmm_sjjqjk.jpg" />
      </div>
    </div>
  );
}
