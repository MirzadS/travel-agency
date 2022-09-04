import React from "react";
import styles from "./RegisterStyles.module.css";

import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className={styles.fullScreenContainer}>
      <div className={styles.loginContainer}>
        <h1 className={styles.loginTitle}>Registracija korisnika</h1>
        <form className={styles.form}>
          <div className={`${styles.inputGroup} ${styles.success}`}>
            <label for="email">Email</label>
            <input type="email" name="email" id="email" />
            <span className={styles.msg}>Valid email</span>
          </div>

          <div className={`${styles.inputGroup} ${styles.error}`}>
            <label for="password">Password</label>
            <input type="password" name="password" id="password" />
            <span className={styles.msg}>Incorrect password</span>
          </div>
          <div className={`${styles.inputGroup} ${styles.error}`}>
            <label for="password">Password</label>
            <input type="password" name="password" id="password" />
            <span className={styles.msg}>Incorrect password</span>
          </div>
          <div className={`${styles.inputGroup} ${styles.error}`}>
            <label for="password">Password</label>
            <input type="password" name="password" id="password" />
            <span className={styles.msg}>Incorrect password</span>
          </div>
          <div className={`${styles.inputGroup} ${styles.error}`}>
            <label for="password">Password</label>
            <input type="password" name="password" id="password" />
            <span className={styles.msg}>Incorrect password</span>
          </div>
          <div className={`${styles.inputGroup} ${styles.error}`}>
            <label for="password">Password</label>
            <input type="password" name="password" id="password" />
            <span className={styles.msg}>Incorrect password</span>
          </div>
          <Link to="/login" className={styles.redirectToLogin}>
            Login Redirect
          </Link>

          <button type="submit" className={styles.loginButton}>
            Registruj se
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
