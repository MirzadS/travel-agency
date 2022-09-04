import React from "react";
import img1 from "../../assets/keywest.jpg";
import { BsCalendar } from "react-icons/bs";
import { MdFavoriteBorder } from "react-icons/md";
import styles from "./TravelCard.module.css";

const TravelCard = ({ openModal }) => {
  return (
    <section className={styles.blogs} id={styles.blogs}>
      {/* <h1 className={styles.heading}> our daily posts </h1> */}
      <h2 className={styles.sectionTitle}>Najprodavanija putovanja</h2>

      <div className={`${styles.swiper} ${styles.blogsSlider}`}>
        <div className={styles.cardsWrapper}>
          <div className={`${styles.swiperSlide} ${styles.slide}`}>
            <img src={img1} alt="" />
            <div className={styles.icons}>
              <BsCalendar /> 21st may, 2021 - 28st may, 2021
            </div>
            <h3>Sarajevo</h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Reprehenderit, deserunt.
            </p>
            <span className={styles.price}>1000 KM</span>

            <div className={styles.travelCardButtons}>
              <button
                onClick={() => openModal()}
                className={styles.travelBookingBtn}
              >
                Prijavi se
              </button>
              <button className={styles.readMoreBtn}>Više informacija</button>
              <MdFavoriteBorder className={styles.addToWishlistBtn} />
            </div>
          </div>
          <div className={`${styles.swiperSlide} ${styles.slide}`}>
            <img src={img1} alt="" />
            <div className={styles.icons}>
              <BsCalendar /> 21st may, 2021 - 28st may, 2021
            </div>
            <h3>Mostar</h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Reprehenderit, deserunt.
            </p>
            <span className={styles.price}>1400 KM</span>

            <div className={styles.travelCardButtons}>
              <button
                onClick={() => openModal()}
                className={styles.travelBookingBtn}
              >
                Prijavi se
              </button>
              <button className={styles.readMoreBtn}>Više informacija</button>
              <MdFavoriteBorder className={styles.addToWishlistBtn} />
            </div>
          </div>
          <div className={`${styles.swiperSlide} ${styles.slide}`}>
            <img src={img1} alt="" />
            <div className={styles.icons}>
              <BsCalendar /> 21st may, 2021 - 28st may, 2021
            </div>
            <h3>Zagreb</h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Reprehenderit, deserunt.
            </p>
            <span className={styles.price}>1900 KM</span>

            <div className={styles.travelCardButtons}>
              <button
                onClick={() => openModal()}
                className={styles.travelBookingBtn}
              >
                Prijavi se
              </button>
              <button className={styles.readMoreBtn}>Više informacija</button>
              <MdFavoriteBorder className={styles.addToWishlistBtn} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TravelCard;
