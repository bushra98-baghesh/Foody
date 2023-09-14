import React from "react";
import Photo from "../assets/OBJECTS.png";
import { useThemeHook } from "../components/ThemeProvider";
import { Link } from "react-router-dom";
function SuccessfullOrder() {
  const [theme] = useThemeHook();
  return (
    <div
      className={`${
        theme ? "bg-[#171717]" : " bg-white"
      } mx-auto flex flex-col items-center justify-center space-y-10   max-w-3xl  min-h-screen py-10 px-6`}
    >
      <div className="flex-col   items-center space-y-10 justify-center">
        <img
          src={Photo}
          alt=""
          className="object-center object-cover w-2/4  mx-auto"
        />
        <h1
          className={`${
            theme ? "text-white" : " "
          } text-lg sm:text-xl font-semibold`}
        >
          Successfully Ordered
        </h1>
      </div>
      {/* <Link
        to="/home"
        className="bg-[#DC0D28] rounded-md   px-4 py-2   text-white font-medium text-lg"
      >
        Return to Home
      </Link> */}
    </div>
  );
}

export default SuccessfullOrder;
