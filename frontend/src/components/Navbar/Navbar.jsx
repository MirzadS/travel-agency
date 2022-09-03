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

import { Link } from "react-scroll";

import styles from "./NavbarStyles.module.css";
import DropdownMenu from "../DropdownMenu/DropdownMenu";

function Navbar() {
  const [nav, setNav] = useState(false);
  const [dropdownActive, setDropdownActive] = useState(false);
  const handleNav = () => setNav(!nav);

  return (
    <div
      name="home"
      className={nav ? `${styles.navbar} ${styles.navbarBg}` : styles.navbar}
    >
      <div className={nav ? `${styles.logo} ${styles.dark}` : styles.logo}>
        <h2 className={styles.h2}>BEACHES.</h2>
      </div>
      <ul className={styles.navMenu}>
        <Link to="home" smooth={true} duration={500}>
          <li>Home</li>
        </Link>
        <Link to="destinations" smooth={true} duration={500}>
          <li>Destinations</li>
        </Link>
        <Link to="carousel" smooth={true} duration={500}>
          <li>Travel</li>
        </Link>
        <Link to="search" smooth={true} duration={500}>
          <li>Book</li>
        </Link>
        <Link to="views" smooth={true} duration={500}>
          <li>Views</li>
        </Link>
      </ul>
      <div className={styles.navIcons}>
        <MdFavoriteBorder
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
          <Link to="home" smooth={true} duration={500}>
            <li>Home</li>
          </Link>
          <Link to="destinations" smooth={true} duration={500}>
            <li>Destinations</li>
          </Link>
          <Link to="carousel" smooth={true} duration={500}>
            <li>Travel</li>
          </Link>
          <Link to="search" smooth={true} duration={500}>
            <li>Book</li>
          </Link>
          <Link to="views" smooth={true} duration={500}>
            <li>Views</li>
          </Link>
        </ul>
        <div className={styles.mobileMenuBottom}>
          <div className={styles.menuIcons}>
            <button className={styles.button}>Lista želja</button>
            <button className={styles.button}>Odjavi se</button>
          </div>
          <div className={styles.socialIcons}>
            <FaFacebook className={styles.icon} />
            <FaInstagram className={styles.icon} />
            <FaTwitter className={styles.icon} />
            <FaPinterest className={styles.icon} />
            <FaYoutube className={styles.icon} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
