import React, { useState } from "react";
import Link from "next/link";
import styles from "../styles/nav.module.css";

export default function Navbar() {
  const [openIcon, setOpenIcon] = useState(true);
  const handleclick = () => {
    setOpenIcon(!openIcon);
  };
  return (
    <div className={styles.navbar}>
      <div className={styles.logo}>{"<>k.g</>"} </div>

      {openIcon && (
        <div className={styles.openicon}>
          <button onClick={handleclick}>
            <img src="/images/menu-bar.jpg" />
          </button>
        </div>
      )}

      {!openIcon && (
        <>
          <div className={styles.openicon}>
            <button onClick={handleclick}>
              <img src="/images/x-icon.png" />
            </button>
          </div>
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
        </>
      )}

      <div className={styles.largeonlylist}>
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
    </div>
  );
}
