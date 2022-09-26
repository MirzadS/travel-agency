import React, { useState, useEffect } from "react";
import styles from "./TableToursStyles.module.css";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

import axios from "axios";

const TableNewTour = () => {
  const navigate = useNavigate();
  const [tours, setTours] = useState([]);

  const deleteTour = async (travel_id) => {
    Swal.fire({
      title: "Jeste li sigurni?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Da, izbriši!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        await axios.post("http://localhost:5000/izbrisi-putovanje", {
          travel_id,
        });
        Swal.fire(
          "Izbrisano!",
          "Vaše putovanje je uspješno izbrisano",
          "success"
        );
        window.location.reload(false);
      }
    });
  };

  const editTour = async (travel_id) => {
    alert("urediii");
  };

  const getAllTours = async () => {
    const { data } = await axios.get("http://localhost:5000/lista-putovanja");
    setTours(data.tours);
  };

  useEffect(() => {
    getAllTours();
  }, []);
  return (
    <div className={styles.container}>
      <h2 className={styles.h2}>Lista putovanja</h2>
      <ul className={styles.responsiveTable}>
        <li className={styles.tableHeader}>
          <div>Grad</div>
          <div>Država</div>
          <div>Cijena</div>
          <div>Početak putovanja</div>
          <div>Kraj putovanja</div>
          <div>Broj dana</div>
          <div></div>
          <div></div>
        </li>

        {tours.map(
          ({
            travel_id,
            city,
            country_name,
            price,
            start_date,
            end_date,
            number_of_days,
          }) => (
            <li key={travel_id} className={styles.tableRow}>
              <div className={`${styles.col} ${styles.col1}`} data-label="..">
                <p>{city}</p>
              </div>

              <div>
                <p>{country_name}</p>
              </div>
              <div>
                <p>{price} KM</p>
              </div>
              <div>
                <p>{start_date.split("T")[0]}</p>
              </div>
              <div>
                <p>{end_date.split("T")[0]}</p>
              </div>
              <div>
                <p>{number_of_days}</p>
              </div>
              <div>
                <button
                  className={styles.editButton}
                  onClick={() =>
                    navigate(`/agencija/azuriraj-putovanje/${travel_id}`)
                  }
                >
                  Uredi
                </button>
              </div>
              <div>
                <button
                  className={styles.deleteButton}
                  onClick={() => deleteTour(travel_id)}
                >
                  Izbriši
                </button>
              </div>
            </li>
          )
        )}
      </ul>
    </div>
  );
};

export default TableNewTour;
