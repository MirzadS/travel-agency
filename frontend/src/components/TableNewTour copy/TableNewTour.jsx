import React from "react";
import styles from "./TableNewTourStyles.module.css";

const TableNewTour = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.h2}>Dodaj novo putovanje</h2>
      <ul className={styles.responsiveTable}>
        <li className={styles.tableHeader}>
          <div className={`${styles.col} ${styles.col1}`}>Grad</div>
          <div className={`${styles.col} ${styles.col2}`}>Država</div>
          <div className={`${styles.col} ${styles.col4}`}>Cijena</div>
          <div className={`${styles.col} ${styles.col3}`}>Opis</div>
          <div className={`${styles.col} ${styles.col4}`}>Početak put.</div>
          <div className={`${styles.col} ${styles.col4}`}>Kraj put.</div>
          <div className={`${styles.col} ${styles.col4}`}>Broj dana</div>
          <div className={`${styles.col} ${styles.col4}`}>Max br. osoba</div>
          <div className={`${styles.col} ${styles.col4}`}>Min br. osoba</div>
          <div className={`${styles.col} ${styles.col4}`}>Slobodna mjesta</div>
          <div className={`${styles.col} ${styles.col4}`}></div>
        </li>
        <li className={styles.tableRow}>
          <div className={`${styles.col} ${styles.col1}`} data-label="..">
            Sanski Most
          </div>
          <div className={`${styles.col} ${styles.col2}`}>
            <select name="countries">
              <option value="volvo">Volvo</option>
              <option value="saab">Saab</option>
              <option value="fiat">Fiat</option>
              <option value="audi">Audi</option>
            </select>
          </div>
          <div className={`${styles.col} ${styles.col3}`}>1300 KM</div>
          <div className={`${styles.col} ${styles.col4}`}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </div>
          <div className={`${styles.col} ${styles.col4}`}>
            <input
              type="date"
              defaultValue={new Date().toISOString().substr(0, 10)}
            />
          </div>
          <div className={`${styles.col} ${styles.col4}`}>
            <input
              type="date"
              defaultValue={new Date().toISOString().substr(0, 10)}
            />
          </div>
          <div className={`${styles.col} ${styles.col4}`}>
            <input type="number" min={1} />
          </div>
          <div className={`${styles.col} ${styles.col4}`}>
            <input type="number" min={1} />
          </div>
          <div className={`${styles.col} ${styles.col4}`}>
            <input type="number" min={1} />
          </div>
          <div className={`${styles.col} ${styles.col4}`}>
            <input type="number" min={1} />
          </div>
          <div className={`${styles.col} ${styles.col4}`}>
            <button>Dodaj</button>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default TableNewTour;
