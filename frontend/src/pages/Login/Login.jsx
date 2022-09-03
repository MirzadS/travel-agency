import React from "react";
import styles from "./LoginStyles.module.css";

import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className={styles.fullScreenContainer}>
      <div className={styles.loginContainer}>
        <h1 className={styles.loginTitle}>Welcome</h1>
        <form className={styles.form}>
          <div className={`${styles.inputGroup} ${styles.success}`}>
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="email" />
            <span className={styles.msg}>Valid email</span>
          </div>

          <div className={`${styles.inputGroup} ${styles.error}`}>
            <label htmlFor="password">Password</label>
            <input type="password" name="password" id="password" />
            <span className={styles.msg}>Incorrect password</span>
          </div>

          <Link to="/registracija" className={styles.redirectToRegistration}>
            Registracija Redirect
          </Link>

          <button type="submit" className={styles.loginButton}>
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
