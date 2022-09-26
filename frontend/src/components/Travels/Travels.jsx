import React, { useState, useEffect, useContext } from "react";
import TravelCard from "../TravelCard/TravelCard";
import styles from "../TravelCard/TravelCardStyles.module.css";
import { DataContext } from "../../context/DataContext";

import axios from "axios";

const Travels = ({ title, openModal, isWishlist }) => {
  const { token } = useContext(DataContext);
  const [tours, setTours] = useState([]);

  const getTours = async () => {
    const { data } = await axios.get("http://localhost:5000/lista-putovanja");
    setTours(data.tours);

    console.log(data.tours);
  };

  const getWishlist = async () => {
    const { data } = await axios.post(
      "http://localhost:5000/spasena-putovanja",
      { user_id: token.t_user_id }
    );
    setTours(data.tours);

    console.log(data.tours);
  };

  useEffect(() => {
    if (isWishlist) {
      getWishlist();
    } else {
      getTours();
    }
  }, []);

  return (
    <div>
      <section className={styles.blogs} id={styles.blogs}>
        <h2 className={styles.sectionTitle}>{title}</h2>

        <div className={`${styles.swiper} ${styles.blogsSlider}`}>
          <div className={styles.cardsWrapper}>
            {tours.map(
              ({
                travel_id,
                city,
                description,
                price,
                start_date,
                end_date,
                url,
              }) => (
                <TravelCard
                  isWishlist={isWishlist}
                  openModal={openModal}
                  city={city}
                  price={price}
                  description={description}
                  start_date={start_date}
                  end_date={end_date}
                  travel_id={travel_id}
                  url={url}
                />
              )
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Travels;
