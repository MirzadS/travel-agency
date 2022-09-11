import React, { createContext, useState, useRef, useEffect } from "react";
import jwt_decode from "jwt-decode";
import axios from "axios";

const DataContext = createContext();

const DataProvider = ({ children }) => {
  const [token, setToken] = useState(() =>
    localStorage.getItem("access_token")
      ? jwt_decode(localStorage.getItem("access_token"))
      : null
  );

  const onSubmitLoginHandler = async (data) => {
    try {
      const res = await axios.post("http://localhost:5000/login", {
        email: data.email,
        password: data.password,
        admin: data.admin,
      });

      localStorage.setItem("access_token", res.data.access_token);
      const decoded_token = jwt_decode(res.data.access_token);
      setToken(decoded_token);

      if (decoded_token.t_role_id === 1) {
        window.open("http://localhost:3000/agencija/pocetna", "_self");
      } else if (decoded_token.t_role_id === 2) {
        window.open("http://localhost:3000/pocetna", "_self");
      } else {
        window.open("http://localhost:3000/login", "_self");
      }
      // alert(res.data.access_token);
      // alert(jwt_decode(res.data.access_token));
    } catch (error) {
      alert(error.response.data);
    }
  };

  const onSubmitRegistrationHandler = async (data) => {
    try {
      const res = await axios.post("http://localhost:5000/registracija", {
        email: data.email,
        password: data.password,
      });

      window.open("http://localhost:3000/login", "_self");
    } catch (error) {
      alert(error.response.data);
    }
  };

  return (
    <DataContext.Provider
      value={{ onSubmitLoginHandler, onSubmitRegistrationHandler, token }}
    >
      {children}
    </DataContext.Provider>
  );
};

export { DataProvider, DataContext };
