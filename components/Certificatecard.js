import React from "react";
import styles from "../styles/homebody.module.css";

export default function Skillcard({ certificate }) {
  return <div className={styles.certificatecard}>{certificate}</div>;
}
