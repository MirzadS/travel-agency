import React from "react";
import img1 from "../../assets/maldives.jpg";
import styles from "./AboutUsSectionStyles.module.css";

const AboutUsSection = () => {
  return (
    <section className={styles.about}>
      <div className={styles.image}>
        <img src={img1} alt="" />
      </div>

      <div className={styles.content}>
        <h3>Zašto trebate izabrati baš nas?</h3>
        <p>
          Dream Tours je pustolovno - turistička agencija posve nove generacije
          čije stručno vodstvo tvore putnici s više od desetljeća putničkog
          iskustva, a kojima su putovanja strast, ljubav i životni stil. Naša
          misao vodilja je da putovanja nisu samo puki posjet lokaciji, već
          uvijek jedinstveno iskustvo koje poticanjem svih naših osjetila ima za
          cilj oplemeniti naše živote i proširiti vidike. U kreaciji, a posebno
          provedbi naših putovanja, taj cilj nastojimo ostvariti prenoseći Vam
          naša putnička iskustva stečena na različitim krajevima svijeta, uvijek
          i isključivo iz prve ruke.
        </p>
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
