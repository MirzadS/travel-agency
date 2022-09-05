import React, { useState } from "react";
import ReactDOM from "react-dom";
import { AiOutlineClose } from "react-icons/ai";
import img from "../../assets/card_img.png";
import styles from "./TravelBookingStyles.module.css";

const TravelBooking = ({ isVisible, hide }) => {
  return isVisible
    ? ReactDOM.createPortal(
        <>
          <div className={styles.container}>
            <form action="">
              <AiOutlineClose
                style={{
                  position: "absolute",
                  top: "20px",
                  right: "20px",
                  fontSize: "25px",
                  fontWeight: "bolder",
                  cursor: "pointer",
                }}
                onClick={() => hide()}
              />
              <div className={styles.row}>
                <div className={styles.col}>
                  <h3 className={styles.title}>Osobni podaci</h3>

                  <div className={styles.inputBox}>
                    <span>Ime i Prezime :</span>
                    <input type="text" placeholder="" />
                  </div>
                  <div className={styles.inputBox}>
                    <span>email :</span>
                    <input type="email" placeholder="" />
                  </div>
                  <div className={styles.inputBox}>
                    <span>Adresa :</span>
                    <input type="text" placeholder="" />
                  </div>
                  <div className={styles.inputBox}>
                    <span>Grad :</span>
                    <input type="text" placeholder="" />
                  </div>

                  <div className={styles.flex}>
                    <div className={styles.inputBox}>
                      <span>Država :</span>
                      <input type="text" placeholder="" />
                    </div>
                    <div className={styles.inputBox}>
                      <span>zip code :</span>
                      <input type="text" placeholder="123 456" />
                    </div>
                  </div>
                </div>

                <div className={styles.col}>
                  <h3 className={styles.title}>Plaćanje</h3>

                  <div className={styles.inputBox}>
                    <span>Dopuštene kartice :</span>
                    <img src={img} alt="" />
                  </div>
                  <div className={styles.inputBox}>
                    <span>Ime na kartici :</span>
                    <input type="text" placeholder="" />
                  </div>
                  <div className={styles.inputBox}>
                    <span>Broj kartice :</span>
                    <input type="number" placeholder="1111-2222-3333-4444" />
                  </div>
                  <div className={styles.inputBox}>
                    <span>Mjesec isteka :</span>
                    <input type="text" placeholder="" />
                  </div>

                  <div className={styles.flex}>
                    <div className={styles.inputBox}>
                      <span>Godina isteka :</span>
                      <input type="number" placeholder="2022" />
                    </div>
                    <div className={styles.inputBox}>
                      <span>CVV :</span>
                      <input type="text" placeholder="1234" />
                    </div>
                  </div>
                </div>
              </div>

              <input
                type="submit"
                value="POTVRDI"
                className={styles.submitBtn}
              />
            </form>
          </div>
        </>,
        document.body
      )
    : null;
};

export default TravelBooking;
