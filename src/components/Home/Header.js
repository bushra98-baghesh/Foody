import React, { useContext, useEffect, useState } from "react";
import Switch from "react-switch";
import { BsCart4 } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { ThemeContext } from "../ThemeProvider";
import { useSelector } from "react-redux";
function Header() {
  const { theme, setThemeMode } = useContext(ThemeContext);
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);
  const [darkMode, setDarkMode] = useState(theme);
  const navigate = useNavigate();
  useEffect(() => {
    setThemeMode(darkMode);
  }, [darkMode, setThemeMode]);
  const handleChange = () => {
    setDarkMode(!darkMode);
  };
  return (
    <div className="flex items-center justify-between px-4 py-4">
      <Switch
        offColor="#000000"
        offHandleColor="#FFFFFF"
        onColor="#DFDFDF"
        boxShadow="0px 1px 5px rgba(0, 0, 0, 0.8)"
        activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
        onHandleColor="#000000"
        checkedIcon={
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100%",
              fontSize: 16,
            }}
          >
            🌙
          </div>
        }
        uncheckedIcon={
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100%",
              fontSize: 16,
            }}
          >
            ☀️
          </div>
        }
        onChange={handleChange}
        height={28}
        checked={darkMode}
        className="shadow-lg"
      />
      <div className={`${theme ? "text-white" : ""} text-2xl font-bold`}>
        <span>F</span>
        <span className="text-[#DC0D28]">OO</span>
        <span>D</span>
        <span>Y</span>
      </div>

      <button
        onClick={() => navigate("/cart")}
        className={`${
          theme ? "text-[#d3cfcf]" : ""
        } p-2 border-2 border-[#d3cfcf] shadow-lg rounded-lg relative`}
      >
        <div className="bg-[#DC0D28] shadow-sm shadow-[#DC0D28]  rounded-full w-6 h-6 absolute -top-3 -right-2 text-white text-sm flex items-center justify-center">
          {totalQuantity}
        </div>
        <BsCart4 size={24} />
      </button>
    </div>
  );
}

export default Header;
