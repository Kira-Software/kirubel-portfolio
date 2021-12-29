import Head from "next/head";
import Image from "next/image";
import styles from "../styles/homebody.module.css";
import Link from "next/link";
import Skillcard from "../components/Skillcard";
import React from "react";
import { useRouter } from "next/router";
export default function Home() {
  const router = useRouter();
  let skills = [
    {
      name: "React",
      src: "https://res.cloudinary.com/dh6muae8v/image/upload/v1640781747/react_r_wazmot.png",
    },
    {
      name: "Next.js",
      src: "https://res.cloudinary.com/dh6muae8v/image/upload/v1640781747/next-r_shbmek.png",
    },
    {
      name: "Express.js",
      src: "https://res.cloudinary.com/dh6muae8v/image/upload/v1640781782/ex_r_hkoebh.png",
    },
    {
      name: "MongoDB",
      src: "https://res.cloudinary.com/dh6muae8v/image/upload/v1640781747/mongodb_r_ynfuwx.png",
    },
    // { name: "Git", src: "git_r.png" },
    {
      name: "Github",
      src: "https://res.cloudinary.com/dh6muae8v/image/upload/v1640781746/github-r_e8eonl.png",
    },
  ];

  const handlecontact = () => {
    router.push("/contact");
  };
  const handleskill = () => {
    router.push("/about");
  };
  return (
    <div>
      <Head>
        <title>My Portfolio</title>
        <meta name="description" content="kirubel girmay portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.description}>
        <h1>Kirubel Girmay</h1>
        <h3>Full Stack Web Developer</h3>
        <br />
        <p>
          A passionate individual having a great skill in developing Full Stack
          Web Applications{" "}
        </p>
        <div>
          {/* <button className={styles.contact}>*/}
          <button onClick={handlecontact} className={styles.contact}>
            Contact Me
          </button>
          {/* </button> 
          {/* <button className="btn btn-secondary">
            <Link href="/contact">Contact Me</Link>{" "}
          </button> */}
        </div>
      </div>

      <div className={styles.photo}>
        <img src="https://res.cloudinary.com/dh6muae8v/image/upload/v1640780384/my_uqjigw.png" />
      </div>

      <div className={styles.skill}>
        <h1> Top Skills</h1>{" "}
      </div>
      {skills.map((skill, idx) => {
        return <Skillcard name={skill.name} path={skill.src} key={idx} />;
      })}

      <button onClick={handleskill} className={styles.otherskills}>
        Other Skills
      </button>
      {/* <button className="btn btn-primary m-3">Button Primary</button> */}
    </div>
  );
}
