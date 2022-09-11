import React from "react";
// import styles from "./TableNewTourStyles.module.css";
import "./TableNewTourStyles.css";

const TableNewTour = () => {
  return (
    <form className="form">
      <div className="title">Kreiraj novo putovanje</div>
      <div className="input-container ic1">
        <input id="firstname" className="input" type="text" placeholder=" " />
        <div className="cut"></div>
        <label htmlFor="firstname" className="placeholder">
          Grad
        </label>
      </div>
      <div className="input-container ic2">
        <input id="lastname" className="input" type="text" placeholder=" " />
        <div className="cut"></div>
        <label htmlFor="lastname" className="placeholder">
          Država
        </label>
      </div>
      <div className="input-container ic2">
        <input id="price" className="input" type="text" placeholder=" " />
        <div className="cut cut-short"></div>
        <label htmlFor="price" className="placeholder">
          Cijena
        </label>
      </div>
      <div className="input-container ic2">
        <input id="description" className="input" type="text" placeholder=" " />
        <div className="cut cut-short"></div>
        <label htmlFor="description" className="placeholder">
          Opis
        </label>
      </div>
      <div className="input-container ic2">
        <input id="start_date" className="input" type="text" placeholder=" " />
        <div className="cut cut-short"></div>
        <label htmlFor="start_date" className="placeholder">
          Početak putovanja
        </label>
      </div>
      <div className="input-container ic2">
        <input id="end_date" className="input" type="text" placeholder=" " />
        <div className="cut cut-short"></div>
        <label htmlFor="end_date" className="placeholder">
          Kraj putovanja
        </label>
      </div>
      <div className="input-container ic2">
        <input
          id="number_of_days"
          className="input"
          type="text"
          placeholder=" "
        />
        <div className="cut cut-short"></div>
        <label htmlFor="number_of_days" className="placeholder">
          Broj dana
        </label>
      </div>
      <div className="input-container ic2">
        <input id="max_number" className="input" type="text" placeholder=" " />
        <div className="cut cut-short"></div>
        <label htmlFor="max_number" className="placeholder">
          Max br. osoba
        </label>
      </div>
      <div className="input-container ic2">
        <input id="min_number" className="input" type="text" placeholder=" " />
        <div className="cut cut-short"></div>
        <label htmlFor="min_number" className="placeholder">
          Min br. osoba
        </label>
      </div>
      <button type="text" className="submit">
        Kreiraj putovanje
      </button>
    </form>
  );
};

export default TableNewTour;
