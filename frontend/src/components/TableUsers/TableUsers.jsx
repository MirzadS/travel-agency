import React, { useState, useEffect } from "react";
import styles from "./TableUsersStyles.module.css";
import Swal from "sweetalert2";

import axios from "axios";

const TableUsers = () => {
  const [users, setUsers] = useState([]);

  const deleteUser = async (user_id) => {
    Swal.fire({
      title: "Jeste li sigurni?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Da, izbriši!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        await axios.post("http://localhost:5000/izbrisi-korisnika", {
          user_id,
        });
        Swal.fire("Izbrisano!", "Korisnik je uspješno izbrisan", "success");
        window.location.reload(false);
      }
    });
  };

  const getAllUsers = async () => {
    const { data } = await axios.get("http://localhost:5000/lista-korisnika");
    setUsers(data.users);
  };

  useEffect(() => {
    getAllUsers();
  }, []);
  return (
    <div className={styles.container}>
      <h2 className={styles.h2}>Lista korisnika</h2>
      <ul className={styles.responsiveTable}>
        {/* <li className={styles.tableHeader}>
          <div className={styles.headerDiv}>Email</div>
          <div></div>
        </li> */}

        {users.map(({ normal_user_id, email }) => (
          <li key={normal_user_id} className={styles.tableRow}>
            <div className={styles.rowDiv} data-label="..">
              <p>{email}</p>
            </div>

            <div>
              <button
                className={styles.deleteButton}
                onClick={() => deleteUser(normal_user_id)}
              >
                Izbriši
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TableUsers;
