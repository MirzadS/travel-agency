import React, { useContext } from "react";
import img1 from "../../assets/keywest.jpg";
import { BsCalendar, BsFillTrashFill } from "react-icons/bs";
import { MdFavoriteBorder } from "react-icons/md";
import styles from "./TravelCardStyles.module.css";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

import { DataContext } from "../../context/DataContext";

import axios from "axios";

const TravelCard = ({
  // openModal,
  isWishlist,
  city,
  description,
  price,
  start_date,
  end_date,
  travel_id,
  url,
}) => {
  const { token } = useContext(DataContext);
  const navigate = useNavigate();

  const addToWishlist = async () => {
    await axios.post("http://localhost:5000/spasi-putovanje", {
      travel_id,
      user_id: token.t_user_id,
    });

    Swal.fire({
      icon: "success",
      title: "Uspješno dodano u listu želja",
      showConfirmButton: false,
      timer: 1500,
    });
  };
  const deleteFromWishlist = async () => {
    await axios.post("http://localhost:5000/izbrisi-spaseno-putovanje", {
      travel_id,
      user_id: token.t_user_id,
    });

    Swal.fire({
      icon: "success",
      title: "Uspješno izbrisano s liste želja",
      showConfirmButton: false,
      timer: 1500,
    });
    window.location.reload(false);
  };

  const prijaviPutovanje = async () => {
    await axios.post("http://localhost:5000/prijavi-putovanje", {
      travel_id,
      user_id: token.t_user_id,
    });

    Swal.fire({
      icon: "success",
      title: "Uspješno ste prijavljeni",
      showConfirmButton: false,
      timer: 1500,
    });
  };
  return (
    <>
      <div className={`${styles.swiperSlide} ${styles.slide}`}>
        <img src={`http://localhost:5000/images/${url}`} alt="" />
        <div className={styles.icons}>
          <BsCalendar /> {start_date.split("T")[0]} - {end_date.split("T")[0]}
        </div>
        <h3>{city}</h3>
        <p>{description.slice(0, 75)}</p>
        <span className={styles.price}>{price} KM</span>

        <div className={styles.travelCardButtons}>
          <button
            // onClick={() => openModal()}
            onClick={() => prijaviPutovanje()}
            className={styles.travelBookingBtn}
          >
            Prijavi se
          </button>
          <button
            className={styles.readMoreBtn}
            onClick={() => navigate(`/detalji-putovanja/${travel_id}`)}
          >
            Više informacija
          </button>
          {isWishlist ? (
            <BsFillTrashFill
              onClick={deleteFromWishlist}
              className={styles.addToWishlistBtn}
            />
          ) : (
            <MdFavoriteBorder
              onClick={addToWishlist}
              className={styles.addToWishlistBtn}
            />
          )}
        </div>
      </div>
    </>
  );
};

export default TravelCard;
