import React from "react";
import img1 from "../../assets/maldives.jpg";
import Footer from "../../components/Footer/Footer";
import ImageSlider from "../../components/ImageSlider/ImageSlider";
import Navbar from "../../components/Navbar/Navbar";
import styles from "./TravelDetailsStyles.module.css";

import imgSlider1 from "../../assets/keywest.jpg";
import imgSlider2 from "../../assets/maldives2.jpg";

const TravelDetails = () => {
  const slides = [
    { url: imgSlider1 },
    { url: imgSlider2 },
    { url: imgSlider1 },
  ];

  return (
    <>
      <Navbar notHomepage={true} />
      <section className={styles.about}>
        <div className={styles.image}>
          {/* <img src={img1} alt="" /> */}
          <ImageSlider slides={slides} />
        </div>

        <div className={styles.content}>
          <h3>Sarajevo</h3>
          <span>Bosna i Hercegovina</span>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
            excepturi totam, culpa deserunt reiciendis suscipit vero molestiae
            dolorem voluptas aut vitae, corrupti quis tempore omnis ut optio
            iste sint? At!
          </p>

          <div className={styles.details}>
            <table className={styles.table}>
              <tr>
                <td>POLAZAK / POVRATAK</td>
                <td>20 Oktobar / 29 Oktobar</td>
              </tr>
              <tr>
                <td>PRIJEVOZ</td>
                <td>Avion</td>
              </tr>
              <tr>
                <td>TRAJANJE PUTOVANJA</td>
                <td>9 dana</td>
              </tr>
              <tr>
                <td>MIN. BROJ PUTNIKA</td>
                <td>40</td>
              </tr>
              <tr>
                <td>MAX. BROJ PUTNIKA</td>
                <td>60</td>
              </tr>
              <tr>
                <td>STATUS PUTOVANJA</td>
                <td>Aktivno</td>
              </tr>
              <tr>
                <td>PREOSTALI BROJ MJESTA</td>
                <td>------</td>
              </tr>
            </table>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default TravelDetails;
