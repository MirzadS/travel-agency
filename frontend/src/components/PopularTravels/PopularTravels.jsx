import React from "react";
import TravelCard from "../TravelCard/TravelCard";
import styles from "../TravelCard/TravelCardStyles.module.css";

const PopularTravels = ({ openModal }) => {
  return (
    <div>
      <section className={styles.blogs} id={styles.blogs}>
        {/* <h1 className={styles.heading}> our daily posts </h1> */}
        <h2 className={styles.sectionTitle}>Najpopularnija putovanja</h2>

        <div className={`${styles.swiper} ${styles.blogsSlider}`}>
          <div className={styles.cardsWrapper}>
            <TravelCard openModal={openModal} />
            <TravelCard openModal={openModal} />
            <TravelCard openModal={openModal} />
            <TravelCard openModal={openModal} />
            <TravelCard openModal={openModal} />
          </div>
        </div>
      </section>
    </div>
  );
};

export default PopularTravels;
