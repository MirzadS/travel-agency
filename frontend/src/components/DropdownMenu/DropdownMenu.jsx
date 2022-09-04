import React from "react";
import styles from "./DropdownMenu.module.css";

const DropdownMenu = () => {
  const handleLogout = () => {
    alert("Odjavi korisnika");
  };

  return (
    <div className={styles.dropdownMenu}>
      <div onClick={handleLogout} className={styles.box}>
        <span>Odjavi se</span>
      </div>
    </div>
  );
};

export default DropdownMenu;
