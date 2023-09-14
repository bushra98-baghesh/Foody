import React, { createContext, useContext, useState } from "react";

const LangContext = createContext();

export const LangProvider = ({ children }) => {
  const [lan, setLan] = useState(localStorage.getItem("lan") || "en");

  const changeLanguage = (newLan) => {
    localStorage.setItem("lan", newLan);
    setLan(newLan);
  };

  return (
    <LangContext.Provider value={{ lan, changeLanguage }}>
      {children}
    </LangContext.Provider>
  );
};

export const useLang = () => {
  return useContext(LangContext);
};
