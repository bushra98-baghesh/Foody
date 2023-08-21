import React, { useContext, useEffect, useState } from "react";
import Switch from "react-switch";
import { BsCart4 } from "react-icons/bs";
import { Link } from "react-router-dom";
import { ThemeContext } from "../ThemeProvider";
function Header() {
  const { theme, setThemeMode } = useContext(ThemeContext);
  const [darkMode, setDarkMode] = useState(theme);
  useEffect(() => {
    setThemeMode(darkMode);
    console.log(darkMode);
  }, [darkMode]);
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

      <Link
        to="cart"
        className={`${
          theme ? "text-[#d3cfcf]" : ""
        } p-2 border-2 border-[#d3cfcf] shadow-lg rounded-lg`}
      >
        <BsCart4 size={24} />
      </Link>
    </div>
  );
}

export default Header;
