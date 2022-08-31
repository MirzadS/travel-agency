import React, { createContext, useState, useRef, useEffect } from "react";

const DataContext = createContext();

const DataProvider = ({ children }) => {
  const proba123 = () => {};

  return (
    <DataContext.Provider value={{ proba123 }}>{children}</DataContext.Provider>
  );
};

export { DataProvider, DataContext };
