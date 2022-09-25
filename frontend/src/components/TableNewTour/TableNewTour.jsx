import React from "react";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import styles from "./TableNewTourStyles.module.css";

import axios from "axios";

const schema = yup.object().shape({
  city: yup.string().required(),
  country: yup.string().required(),
  price: yup.number().required(),
  description: yup.string().required(),
  start_date: yup.date().required(),
  end_date: yup.date().required(),
  number_of_days: yup.number().required(),
  max_number: yup.number().required(),
  min_number: yup.number().required(),
  //   images: yup.file().required(),
});

const TableNewTour = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ resolver: yupResolver(schema) });

  const createNewTour = async (data) => {
    // console.log(data);

    // formData.append("city", data.city);
    // formData.append("country", data.country);
    // formData.append("file", data.file[0]);
    // const res = await fetch("http://localhost:5000/novo-putovanje", {
    //   method: "POST",
    //   body: formData,
    // });

    const agency_data = {
      city: data.city,
      country: data.country,
      price: data.price,
      description: data.description,
      start_date: data.start_date,
      end_date: data.end_date,
      number_of_days: data.number_of_days,
      max_number: data.max_number,
      min_number: data.min_number,
    };

    const new_tour_id = await axios.post(
      "http://localhost:5000/novo-putovanje",
      agency_data
    );

    // console.log(JSON.stringify(new_tour_id.data.rows[0].travel_id));

    for (let index = 0; index < data.file.length; index++) {
      const formData = new FormData();
      formData.append("file", data.file[index]);
      formData.append("travel_id", new_tour_id.data.rows[0].travel_id);

      await axios.post("http://localhost:5000/fotografije-putovanja", formData);
    }
    alert("Uspješno dodano novo putovanje");

    // for (var pair of formData.entries()) {
    //   console.log(pair[0] + ", " + pair[1]);
    // }

    // await axios
    //   .post("http://localhost:5000/novo-putovanje", formData, {
    //     headers: { "Content-Type": "multipart/form-data" },
    //   })
    //   .then((res) => alert(res.data))
    //   .catch((err) => alert(err));

    // const response = await fetch("http://localhost:5000/novo-putovanje", {
    //   method: "POST",
    //   body: formData,
    // });

    // alert(response);
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit(createNewTour)}>
      <div className={styles.title}>Kreiraj novo putovanje</div>
      <div className={`${styles.inputContainer} ${styles.ic1}`}>
        <input
          id="city"
          className={styles.input}
          type="text"
          placeholder=" "
          value="Kakanj"
          {...register("city")}
        />
        <div className={styles.cut}></div>
        <label htmlFor="city" className={styles.placeholder}>
          Grad
        </label>
      </div>
      {errors.city && (
        <span style={{ color: "red" }}>{errors.city.message}</span>
      )}
      <div className={`${styles.inputContainer} ${styles.ic2}`}>
        <input
          id="country"
          className={styles.input}
          type="text"
          placeholder=" "
          value="BiH"
          {...register("country")}
        />
        <div className={styles.cut}></div>
        <label htmlFor="country" className={styles.placeholder}>
          Država
        </label>
      </div>
      {errors.country && (
        <span style={{ color: "red" }}>{errors.country.message}</span>
      )}

      <div className={`${styles.inputContainer} ${styles.ic2}`}>
        <input
          id="price"
          className={styles.input}
          type="number"
          placeholder=" "
          value="1000"
          {...register("price")}
        />
        <div className={`${styles.cut} ${styles.cutShort}`}></div>
        <label htmlFor="price" className={styles.placeholder}>
          Cijena
        </label>
      </div>
      {errors.price && (
        <span style={{ color: "red" }}>{errors.price.message}</span>
      )}

      <div className={`${styles.inputContainer} ${styles.ic2}`}>
        <input
          id="description"
          className={styles.input}
          type="text"
          placeholder=" "
          value="loremmmmm"
          {...register("description")}
        />
        <div className={`${styles.cut} ${styles.cutShort}`}></div>
        <label htmlFor="description" className={styles.placeholder}>
          Opis
        </label>
      </div>
      {errors.description && (
        <span style={{ color: "red" }}>{errors.description.message}</span>
      )}

      <div className={`${styles.inputContainer} ${styles.ic2}`}>
        <input
          id="start_date"
          className={styles.input}
          type="date"
          defaultValue={new Date().toISOString().substr(0, 10)}
          min={new Date().toISOString().substr(0, 10)}
          placeholder=" "
          {...register("start_date")}
        />
        <div className={`${styles.cut} ${styles.cutShort}`}></div>
        <label htmlFor="start_date" className={styles.placeholder}>
          Početak putovanja
        </label>
      </div>
      {errors.start_date && (
        <span style={{ color: "red" }}>{errors.start_date.message}</span>
      )}

      <div className={`${styles.inputContainer} ${styles.ic2}`}>
        <input
          id="end_date"
          className={styles.input}
          type="date"
          defaultValue={new Date().toISOString().substr(0, 10)}
          min={new Date().toISOString().substr(0, 10)}
          placeholder=" "
          {...register("end_date")}
        />
        <div className={`${styles.cut} ${styles.cutShort}`}></div>
        <label htmlFor="end_date" className={styles.placeholder}>
          Kraj putovanja
        </label>
      </div>
      {errors.end_date && (
        <span style={{ color: "red" }}>{errors.end_date.message}</span>
      )}

      <div className={`${styles.inputContainer} ${styles.ic2}`}>
        <input
          id="number_of_days"
          className={styles.input}
          type="number"
          placeholder=" "
          value="1"
          {...register("number_of_days")}
        />
        <div className={`${styles.cut} ${styles.cutShort}`}></div>
        <label htmlFor="number_of_days" className={styles.placeholder}>
          Broj dana
        </label>
      </div>
      {errors.number_of_days && (
        <span style={{ color: "red" }}>{errors.number_of_days.message}</span>
      )}

      <div className={`${styles.inputContainer} ${styles.ic2}`}>
        <input
          id="min_number"
          className={styles.input}
          type="number"
          placeholder=" "
          min="1"
          value="40"
          {...register("min_number")}
        />
        <div className={`${styles.cut} ${styles.cutShort}`}></div>
        <label htmlFor="min_number" className={styles.placeholder}>
          Min br. osoba
        </label>
      </div>
      {errors.min_number && (
        <span style={{ color: "red" }}>{errors.min_number.message}</span>
      )}

      <div className={`${styles.inputContainer} ${styles.ic2}`}>
        <input
          id="max_number"
          className={styles.input}
          type="number"
          placeholder=" "
          value="60"
          min="1"
          {...register("max_number")}
        />
        <div className={`${styles.cut} ${styles.cutShort}`}></div>
        <label htmlFor="max_number" className={styles.placeholder}>
          Max br. osoba
        </label>
      </div>
      {errors.max_number && (
        <span style={{ color: "red" }}>{errors.max_number.message}</span>
      )}

      <div className={`${styles.inputContainer} ${styles.ic2}`}>
        <input
          id="file"
          className={styles.input}
          type="file"
          placeholder=" "
          multiple
          accept="image/*"
          {...register("file")}
        />
        <div className={`${styles.cut} ${styles.cutShort}`}></div>
        <label htmlFor="file" className={styles.placeholder}>
          Fotografije
        </label>
      </div>
      {errors.images && (
        <span style={{ color: "red" }}>{errors.images.message}</span>
      )}

      <button type="submit" className={styles.submit}>
        Kreiraj putovanje
      </button>
    </form>
  );
};

export default TableNewTour;
