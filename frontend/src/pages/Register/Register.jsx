import React, { useState, useEffect, useContext } from "react";
import styles from "./RegisterStyles.module.css";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { Link } from "react-router-dom";
import { DataContext } from "../../context/DataContext";

import axios from "axios";

const schema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().required().min(6),
  passwordConfirmation: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match"),
});

const Register = () => {
  const { onSubmitRegistrationHandler } = useContext(DataContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ resolver: yupResolver(schema) });

  return (
    <div className={styles.fullScreenContainer}>
      <div className={styles.loginContainer}>
        <h1 className={styles.loginTitle}>Registracija korisnika</h1>
        <form
          onSubmit={handleSubmit(onSubmitRegistrationHandler)}
          className={styles.form}
        >
          <div className={`${styles.inputGroup}`}>
            <label for="email">Email</label>
            <input
              type="email"
              {...register("email")}
              id="email"
              // value="evommm@gmail.com"
            />
            {errors.email && (
              <span style={{ color: "red" }}>{errors.email.message}</span>
            )}
          </div>

          <div className={`${styles.inputGroup}`}>
            <label for="password">Lozinka</label>
            <input
              type="password"
              {...register("password")}
              id="password"
              // value="dreamtoure@gmail.com"
            />
            {errors.password && (
              <span style={{ color: "red" }}>{errors.password.message}</span>
            )}
          </div>
          <div className={`${styles.inputGroup}`}>
            <label for="passwordConfirmation">Potvrdi lozinku</label>
            <input
              type="password"
              {...register("passwordConfirmation")}
              id="passwordConfirmation"
              // value="dreamtoure@gmail.com"
            />
            {errors.passwordConfirmation && (
              <span style={{ color: "red" }}>
                {errors.passwordConfirmation.message}
              </span>
            )}
          </div>

          <button type="submit" className={styles.loginButton}>
            Registruj se
          </button>
          <Link to="/login" className={styles.redirectToLogin}>
            Imate li račun? Prijava
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Register;
