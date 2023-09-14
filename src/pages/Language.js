import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useThemeHook } from "../components/ThemeProvider";
import { useLang } from "../components/LangProvider";
function Language() {
  const [theme] = useThemeHook();
  const navigate = useNavigate();
  const { lan, changeLanguage } = useLang(); // Use the useLang hook to access lan and changeLanguage

  const handleLanguageChange = (newLan) => {
    changeLanguage(newLan);
    navigate("/home");
  };
  return (
    <div className={`${theme ? "bg-[#171717]" : " bg-white"} min-h-screen `}>
      <div className={`${theme ? "text-white" : ""} text-4xl font-bold  py-20`}>
        <span>F</span>
        <span className="text-[#DC0D28]">OO</span>
        <span>D</span>
        <span>Y</span>
      </div>
      <div className=" flex flex-col items-center justify-center space-y-6 mt-10   ">
        <button
          className=" bg-white border-2 shadow-xl border-[#DC0D28] py-4  md:w-3/12 sm:w-4/12 w-5/12 rounded-lg  "
          onClick={() => handleLanguageChange("en")}
        >
          <h2 className="text-[#171717] font-medium  lg:text-xl md:text-lg sm:text-sm text-xs ">
            English
          </h2>
        </button>
        <button
          className=" bg-white border-2 shadow-xl border-[#DC0D28] py-4   md:w-3/12 sm:w-4/12 w-5/12  rounded-lg  "
          onClick={() => handleLanguageChange("ar")}
        >
          <h2 className="text-[#171717] font-medium  lg:text-xl md:text-lg sm:text-sm text-xs  ">
            العربية
          </h2>
        </button>
      </div>

      <div
        className={`${
          theme ? "text-[#d3cfcf]" : "text-[#171717]"
        } fixed bottom-10 w-screen font-medium  whitespace-nowrap text-sm font-Nico-Moji`}
      >
        powered by Goma Plus
      </div>
    </div>
  );
}

export default Language;
