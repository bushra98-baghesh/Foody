import React, { useState } from "react";
import Switch from "react-switch";
import { BsCart4 } from "react-icons/bs";
import { Link } from "react-router-dom";
function Header() {
  const [isDark, setIsDark] = useState(false);
  const handleChange = (val) => {
    setIsDark(val);
  };
  return (
    <div className="flex items-center justify-between px-4 py-4">
      <Switch
        offColor="#DFDFDF"
        offHandleColor="#000000"
        onColor="#000000"
        boxShadow="0px 1px 5px rgba(0, 0, 0, 0.8)"
        activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
        onHandleColor="#FFFFFF"
        checkedIcon={
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100%",
              fontSize: 18,
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
              fontSize: 18,
            }}
          >
            ☀️
          </div>
        }
        onChange={handleChange}
        height={27}
        checked={isDark}
        className="shadow-lg"
      />
      <div className="text-xl font-bold">
        <span>F</span>
        <span className="text-[#DC0D28]">OO</span>
        <span>D</span>
        <span>Y</span>
      </div>

      <Link
        to="cart"
        className="bg-white p-2 border-2 border-[#d3cfcf] shadow-lg rounded-lg"
      >
        <BsCart4 size={24} />
      </Link>
    </div>
  );
}

export default Header;
