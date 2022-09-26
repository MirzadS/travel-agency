import React from "react";
import { AiOutlineSearch } from "react-icons/ai";

import Video from "../../assets/maldivesVideo.mp4";
import styles from "./HeroStyles.module.css";

function Hero() {
  return (
    <div className={styles.hero}>
      <video autoPlay loop muted id={styles.video}>
        <source src={Video} type="video/mp4" />
      </video>
      <div className={styles.overlay}></div>
      <div className={styles.content}>
        <h1 className={styles.h1}>Putovati znači živjeti</h1>
        <h2 className={styles.h2}>Agencija Dream Tours</h2>
      </div>
    </div>
  );
}

export default Hero;
