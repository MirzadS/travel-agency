import React from "react";

import styles from "./HomepageGalleryStyles.module.css";
import img1 from "../../assets/borabora.jpg";
import img2 from "../../assets/keywest.jpg";
import img3 from "../../assets/maldives.jpg";
import img4 from "../../assets/maldives2.jpg";
import img5 from "../../assets/maldives3.jpg";

const HomepageGallery = () => {
  return (
    <section className={styles.gallery} id={styles.gallery}>
      <div className={styles.container}>
        <p className={styles.sectionSubtitle}>Galerija</p>

        <h2 className={`${styles.h2} ${styles.sectionTitle}`}>
          Fotografije s putovanja
        </h2>

        <p className={styles.sectionText}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non saepe
          optio laborum iure, ut quae totam maxime eum sit quia nihil itaque
          architecto.
        </p>

        <ul className={styles.galleryList}>
          <li className={styles.galleryItem}>
            <figure className={styles.galleryImage}>
              <img src={img1} alt="img" />
            </figure>
          </li>

          <li className={styles.galleryItem}>
            <figure className={styles.galleryImage}>
              <img src={img2} alt="img" />
            </figure>
          </li>

          <li className={styles.galleryItem}>
            <figure className={styles.galleryImage}>
              <img src={img3} alt="img" />
            </figure>
          </li>

          <li className={styles.galleryItem}>
            <figure className={styles.galleryImage}>
              <img src={img4} alt="img" />
            </figure>
          </li>

          <li className={styles.galleryItem}>
            <figure className={styles.galleryImage}>
              <img src={img5} alt="img" />
            </figure>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default HomepageGallery;
