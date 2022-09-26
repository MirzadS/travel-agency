import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import ImageSlider from "../../components/ImageSlider/ImageSlider";
import Navbar from "../../components/Navbar/Navbar";
import styles from "./TravelDetailsStyles.module.css";

// import img1 from "../../assets/maldives.jpg";

// import imgSlider1 from "../../assets/keywest.jpg";
// import imgSlider2 from "../../assets/maldives2.jpg";

import axios from "axios";

const TravelDetails = () => {
  const { tour_id } = useParams();
  const [tourInfo, setTourInfo] = useState([]);
  const [tourImages, setTourImages] = useState([{ url: "1664137432025.png" }]);
  const [loading, setLoading] = useState(true);

  // const slides = [
  //   { url: imgSlider1 },
  //   { url: imgSlider2 },
  //   { url: imgSlider1 },
  // ];

  const getTourInfo = async () => {
    const { data } = await axios.post(
      "http://localhost:5000/detalji-putovanja",
      { tour_id }
    );

    setTourInfo(data.tour_info[0]);
    setTourImages(data.images);
    setLoading(false);
  };

  useEffect(() => {
    getTourInfo();
  }, []);

  return (
    <>
      {loading ? (
        "Loading ..."
      ) : (
        <>
          <Navbar notHomepage={true} />
          <section className={styles.about}>
            <div className={styles.image}>
              <ImageSlider slides={tourImages} />
            </div>

            <div className={styles.content}>
              <h3>{tourInfo.city}</h3>
              <span>{tourInfo.country_name}</span>
              <p>{tourInfo.description}</p>

              <div className={styles.details}>
                <table className={styles.table}>
                  <tr>
                    <td>POLAZAK / POVRATAK</td>
                    <td>
                      {tourInfo.start_date.split("T")[0]} /{" "}
                      {tourInfo.end_date.split("T")[0]}
                    </td>
                  </tr>

                  <tr>
                    <td>TRAJANJE PUTOVANJA</td>
                    <td>{tourInfo.number_of_days}</td>
                  </tr>
                  <tr>
                    <td>MIN. BROJ PUTNIKA</td>
                    <td>{tourInfo.min_number}</td>
                  </tr>
                  <tr>
                    <td>MAX. BROJ PUTNIKA</td>
                    <td>{tourInfo.max_number}</td>
                  </tr>
                  {/* <tr>
                    <td>STATUS PUTOVANJA</td>
                    <td>Aktivno</td>
                  </tr> */}
                  <tr>
                    <td>PREOSTALI BROJ MJESTA</td>
                    <td>{tourInfo.available_seats}</td>
                  </tr>
                </table>
              </div>
            </div>
          </section>
          <Footer />
        </>
      )}
    </>
  );
};

export default TravelDetails;
