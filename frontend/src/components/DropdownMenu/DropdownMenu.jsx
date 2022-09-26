import React from "react";
import styles from "./DropdownMenuStyles.module.css";
import { useNavigate } from "react-router-dom";

const DropdownMenu = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("access_token");
    navigate("/");
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
