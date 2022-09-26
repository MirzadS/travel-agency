import React from "react";
import styles from "./FooterStyles.module.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <section className={styles.footer}>
      <div className={styles.boxContainer}>
        <div className={styles.box}>
          <h3>Linkovi</h3>
          <Link to="/pocetna">Početna</Link>
          <Link to="/destinacije">Destinacije</Link>
          <Link to="/o-nama">O Nama</Link>
          <Link to="/login">Login</Link>
          <Link to="/registracija">Registracija</Link>
          <Link to="/lista-zelja">Lista Želja</Link>
          <Link to="/video-poziv">Video poziv</Link>
        </div>

        <div className={styles.box}>
          <h3>Kontakt informacije</h3>
          <a href="#">
            <i className="fas fa-phone"></i> 062222222
          </a>
          <a href="#">
            <i className="fas fa-phone"></i> 062000000
          </a>
          <a href="#">
            <i className="fas fa-envelope"></i> dreamtours@gmail.com
          </a>
        </div>

        <div className={styles.box}>
          <h3>Zapratite nas</h3>
          <a href="#">
            <i className="fab fa-facebook-f"></i> facebook
          </a>
          <a href="#">
            <i className="fab fa-twitter"></i> twitter
          </a>
          <a href="#">
            <i className="fab fa-instagram"></i> instagram
          </a>
          <a href="#">
            <i className="fab fa-linkedin"></i> linkedin
          </a>
        </div>
      </div>
    </section>
  );
};

export default Footer;
