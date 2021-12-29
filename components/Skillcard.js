import React from "react";
import styles from "../styles/homebody.module.css";

export default function Skillcard({ name, path }) {
  return (
    <div className={styles.skillcard}>
      {name}
      <img src={path} />
    </div>
  );
}
