import React, { useState, useEffect } from "react";

import { useParams, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import styles from "./TableUpdateTourStyles.module.css";

import axios from "axios";

const TableNewTour = () => {
  const { tour_id } = useParams();
  const navigate = useNavigate();

  const [countries, setCountries] = useState([]);
  const [tourData, setTourData] = useState([]);

  const [country, setCountry] = useState("1");
  const [city, setCity] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();
  const [numberOfDays, setNumberOfDays] = useState("");
  const [maxNumber, setMaxNumber] = useState("");
  const [minNumber, setMinNumber] = useState("");

  const getAllCountries = async () => {
    const { data } = await axios.get("http://localhost:5000/lista-drzava");
    setCountries(data.countries);
  };
  const getTourData = async () => {
    const { data } = await axios.post(
      "http://localhost:5000/podaci-putovanja",
      { tour_id }
    );

    setCity(data.tourData.city);
    setPrice(data.tourData.price);
    setDescription(data.tourData.description);
    setStartDate(data.tourData.start_date.split("T")[0]);
    setEndDate(data.tourData.end_date.split("T")[0]);
    setNumberOfDays(data.tourData.number_of_days);
    setMaxNumber(data.tourData.max_number);
    setMinNumber(data.tourData.min_number);
  };

  useEffect(() => {
    getAllCountries();
    getTourData();
  }, []);

  const updateTour = async (e) => {
    e.preventDefault();

    const tour_data = {
      city: city,
      country: country,
      price: price,
      description: description,
      start_date: startDate,
      end_date: endDate,
      number_of_days: numberOfDays,
      max_number: maxNumber,
      min_number: minNumber,
      tour_id: tour_id,
    };

    await axios.put("http://localhost:5000/uredi-putovanje", tour_data);

    navigate("/agencija/pocetna");
  };

  return (
    <form className={styles.form} onSubmit={updateTour}>
      <div className={styles.title}>Uredi postojeće putovanje</div>
      <div className={`${styles.inputContainer} ${styles.ic1}`}>
        <input
          id="city"
          className={styles.input}
          type="text"
          placeholder=" "
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <div className={styles.cut}></div>
        <label htmlFor="city" className={styles.placeholder}>
          Grad
        </label>
      </div>

      <div className={`${styles.inputContainer} ${styles.ic2}`}>
        <select
          name="country"
          className={styles.dropdownList}
          onChange={(e) => setCountry(e.target.value)}
          required
        >
          {countries.map(({ name, country_id }) => (
            <option key={country_id} value={country_id}>
              {name}
            </option>
          ))}
        </select>
      </div>

      <div className={`${styles.inputContainer} ${styles.ic2}`}>
        <input
          id="price"
          className={styles.input}
          type="number"
          placeholder=" "
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <div className={`${styles.cut} ${styles.cutShort}`}></div>
        <label htmlFor="price" className={styles.placeholder}>
          Cijena
        </label>
      </div>

      <div className={`${styles.inputContainer} ${styles.ic2}`}>
        <input
          id="description"
          className={styles.input}
          type="text"
          placeholder=" "
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <div className={`${styles.cut} ${styles.cutShort}`}></div>
        <label htmlFor="description" className={styles.placeholder}>
          Opis
        </label>
      </div>

      <div className={`${styles.inputContainer} ${styles.ic2}`}>
        <input
          id="start_date"
          className={styles.input}
          type="date"
          defaultValue={new Date().toISOString().substr(0, 10)}
          // min={new Date().toISOString().substr(0, 10)}
          placeholder=" "
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
        />
        <div className={`${styles.cut} ${styles.cutShort}`}></div>
        <label htmlFor="start_date" className={styles.placeholder}>
          Početak putovanja
        </label>
      </div>

      <div className={`${styles.inputContainer} ${styles.ic2}`}>
        <input
          id="end_date"
          className={styles.input}
          type="date"
          defaultValue={new Date().toISOString().substr(0, 10)}
          // min={new Date().toISOString().substr(0, 10)}
          placeholder=" "
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
        />
        <div className={`${styles.cut} ${styles.cutShort}`}></div>
        <label htmlFor="end_date" className={styles.placeholder}>
          Kraj putovanja
        </label>
      </div>

      <div className={`${styles.inputContainer} ${styles.ic2}`}>
        <input
          id="number_of_days"
          className={styles.input}
          type="number"
          placeholder=" "
          value={numberOfDays}
          onChange={(e) => setNumberOfDays(e.target.value)}
        />
        <div className={`${styles.cut} ${styles.cutShort}`}></div>
        <label htmlFor="number_of_days" className={styles.placeholder}>
          Broj dana
        </label>
      </div>

      <div className={`${styles.inputContainer} ${styles.ic2}`}>
        <input
          id="min_number"
          className={styles.input}
          type="number"
          placeholder=" "
          min="1"
          value={minNumber}
          onChange={(e) => setMinNumber(e.target.value)}
        />
        <div className={`${styles.cut} ${styles.cutShort}`}></div>
        <label htmlFor="min_number" className={styles.placeholder}>
          Min br. osoba
        </label>
      </div>

      <div className={`${styles.inputContainer} ${styles.ic2}`}>
        <input
          id="max_number"
          className={styles.input}
          type="number"
          placeholder=" "
          // value="60"
          min="1"
          value={maxNumber}
          onChange={(e) => setMaxNumber(e.target.value)}
        />
        <div className={`${styles.cut} ${styles.cutShort}`}></div>
        <label htmlFor="max_number" className={styles.placeholder}>
          Max br. osoba
        </label>
      </div>

      <button type="submit" className={styles.submit}>
        Izmjeni podatke putovanja
      </button>
    </form>
  );
};

export default TableNewTour;
