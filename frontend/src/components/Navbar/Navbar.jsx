import React, { useState } from "react";
import { MdFavoriteBorder } from "react-icons/md";
import { BsPerson } from "react-icons/bs";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import {
  FaFacebook,
  FaInstagram,
  FaPinterest,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

import { Link, useNavigate } from "react-router-dom";

import styles from "./NavbarStyles.module.css";
import DropdownMenu from "../DropdownMenu/DropdownMenu";

function Navbar({ notHomepage }) {
  const navigate = useNavigate();
  const [nav, setNav] = useState(false);
  const [dropdownActive, setDropdownActive] = useState(false);
  const handleNav = () => setNav(!nav);

  const handleLogout = () => {
    alert("Odjavi korisnika");
  };

  return (
    <div
      name="home"
      className={
        !notHomepage
          ? nav
            ? `${styles.navbar} ${styles.navbarBg}`
            : styles.navbar
          : nav
          ? `${styles.navbar} ${styles.navbarBg}`
          : `${styles.navbar} ${styles.notHomepage} `
      }
      style={{
        position: notHomepage ? "relative" : "none",
      }}
    >
      <div className={nav ? `${styles.logo} ${styles.dark}` : styles.logo}>
        <h2 onClick={() => navigate("/pocetna")} className={styles.h2}>
          Dream Tours
        </h2>
      </div>
      <ul className={styles.navMenu}>
        <Link to="/pocetna">
          <li>Početna</li>
        </Link>
        <Link to="/destinacije">
          <li>Destinacije</li>
        </Link>
        <Link to="/o-nama">
          <li>O nama</li>
        </Link>
        <Link to="/login">
          <li>Login</li>
        </Link>
        <Link to="/registracija">
          <li>Registracija</li>
        </Link>
        <Link to="/lista-zelja">
          <li>Lista želja</li>
        </Link>
        <Link to="/detalji-putovanja">
          <li>Pojedinacno putov.</li>
        </Link>
        {/* <Link to="views" smooth={true} duration={500}>
          <li>Views</li>
        </Link> */}
      </ul>
      <div className={styles.navIcons}>
        <MdFavoriteBorder
          onClick={() => navigate("/lista-zelja")}
          className={styles.icon}
          style={{ marginRight: "1rem" }}
        />
        <BsPerson
          className={styles.icon}
          onClick={() => setDropdownActive(!dropdownActive)}
        />

        {dropdownActive && <DropdownMenu />}
      </div>
      <div className={styles.hamburger} onClick={handleNav}>
        {!nav ? (
          <HiOutlineMenuAlt4 className={styles.icon} />
        ) : (
          <AiOutlineClose style={{ color: "#000" }} className={styles.icon} />
        )}
      </div>

      <div
        className={
          nav ? `${styles.mobileMenu} ${styles.active}` : styles.mobileMenu
        }
      >
        <ul className={styles.mobileNav}>
          <Link to="/pocetna">
            <li>Početna</li>
          </Link>
          <Link to="/destinacije">
            <li>Destinacije</li>
          </Link>
          <Link to="/login">
            <li>Login</li>
          </Link>
          <Link to="/registracija">
            <li>Registracija</li>
          </Link>
        </ul>
        <div className={styles.mobileMenuBottom}>
          <div className={styles.menuIcons}>
            {/* DODATI to="/lista-zelja" */}
            <button
              onClick={() => navigate("/lista-zelja")}
              className={styles.button}
            >
              Lista želja
            </button>
            <button onClick={handleLogout} className={styles.button}>
              Odjavi se
            </button>
          </div>
          {/* <div className={styles.socialIcons}>
            <FaFacebook className={styles.icon} />
            <FaInstagram className={styles.icon} />
            <FaTwitter className={styles.icon} />
            <FaPinterest className={styles.icon} />
            <FaYoutube className={styles.icon} />
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
