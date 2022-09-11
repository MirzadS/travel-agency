import React, { useContext } from "react";
import img1 from "../../assets/maldives.jpg";
import styles from "./AboutUsSectionStyles.module.css";

import { DataContext } from "../../context/DataContext";

const AboutUsSection = () => {
  const { token } = useContext(DataContext);

  return (
    <section className={styles.about}>
      <div className={styles.image}>
        <img src={img1} alt="" />
      </div>

      <div className={styles.content}>
        <h3>Zašto trebate izabrati baš nas?</h3>
        <p>{token.t_agency_description}</p>
        <p>
          Posjetite nas - mi gosta dočekujemo sa osmijehom, i klijent nam se
          vraća sa osmijehom.
        </p>
        <div className={styles.iconsContainer}>
          <div className={styles.icons}>
            <span>Najbolje destinacije</span>
          </div>
          <div className={styles.icons}>
            <span>Pristupačna cijena</span>
          </div>
          <div className={styles.icons}>
            <span>Usluga vodiča 24/7</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;
