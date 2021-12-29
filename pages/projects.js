import Head from "next/head";
import React from "react";
import styles from "../styles/projects.module.css";

export default function projects() {
  return (
    <>
      <Head>
        <title>Projects</title>
        <meta name="description" content="kirubel girmay projects" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.card}>
        <h1>Habesha Mart</h1>
        <h3>An Online Customer-Broker Connector</h3>
        <p>For in partial fulfillment for the degree of Bachelor of Science</p>
        <img src="https://res.cloudinary.com/dh6muae8v/image/upload/v1640780373/h1_uvdj6p.png" />
        <hr />
        <img src="https://res.cloudinary.com/dh6muae8v/image/upload/v1640780371/h2_cw6vr0.png" />
        <hr />
        <img src="https://res.cloudinary.com/dh6muae8v/image/upload/v1640780375/h3_dnor2u.png" />
        <hr />
        <img src="https://res.cloudinary.com/dh6muae8v/image/upload/v1640780393/h4_hp9yol.png" />
        <h1>SIMS</h1>
        <h3>A Student Information Management System</h3>
        <img src="https://res.cloudinary.com/dh6muae8v/image/upload/v1640780350/gradeentry_ztkfa0.png" />
        <hr />{" "}
        <img src="https://res.cloudinary.com/dh6muae8v/image/upload/v1640780355/assessment_bqxayk.png" />
        <hr />{" "}
        <img src="https://res.cloudinary.com/dh6muae8v/image/upload/v1640780355/account_fs0sii.png" />
        <hr />{" "}
        <img src="https://res.cloudinary.com/dh6muae8v/image/upload/v1640780350/attendance_dq4e3z.png" />
        <hr />
      </div>
    </>
  );
}
