import React from "react";
import styles from "./LoginStyles.module.css";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { Link } from "react-router-dom";

const schema = yup.object().shape({
  email: yup.string().required(),
  password: yup.string().required(),
  admin: yup.bool().required(),
});

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmitHandler = (data) => {
    alert(JSON.stringify(data));
  };

  return (
    <div className={styles.fullScreenContainer}>
      <div className={styles.loginContainer}>
        <h1 className={styles.loginTitle}>Dream Tours</h1>
        <form onSubmit={handleSubmit(onSubmitHandler)} className={styles.form}>
          <div className={`${styles.inputGroup} ${styles.success}`}>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              {...register("email")}
              id="email"
              // value="dreamtoure@gmail.com"
            />
            {/* <span className={styles.msg}>Valid email</span> */}
            {errors.email && (
              <span style={{ color: "red" }}>{errors.email.message}</span>
            )}
          </div>

          <div className={`${styles.inputGroup} ${styles.error}`}>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              {...register("password")}
              id="password"
              // value="123456"
            />
            {/* <span className={styles.msg}>Incorrect password</span> */}
            {errors.password && (
              <span style={{ color: "red" }}>{errors.password.message}</span>
            )}
          </div>

          <div>
            <input
              style={{ width: "15px", height: "15px" }}
              type="checkbox"
              {...register("admin")}
              id="isAdmin"
            />
            <label
              style={{ color: "white", marginLeft: "10px" }}
              htmlFor="isAdmin"
            >
              Admin
            </label>
          </div>

          <Link to="/registracija" className={styles.redirectToRegistration}>
            Registracija Redirect
          </Link>

          <button type="submit" className={styles.loginButton}>
            Prijavi se
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
