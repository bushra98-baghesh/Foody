import React from "react";
import StarRatings from "react-star-ratings";
import { useThemeHook } from "../ThemeProvider";
function ProductRate({ item }) {
  const [theme] = useThemeHook();
  return (
    <div className=" flex items-center  p-3  gap-4 ">
      <div className="rounded-xl  hover:scale-110 transition-all duration-300 ease-in-out  overflow-hidden">
        <img
          src={item?.image}
          alt="img"
          className=" w-24 h-28  object-cover object-center"
        />
      </div>
      <div className="flex flex-col items-center justify-between sm:flex-row gap-6">
        <h1
          className={`${theme ? "text-white" : "text-black"} font-bold 
       text-base`}
        >
          {item?.name}
        </h1>

        <StarRatings
          rating={2.403}
          numberOfStars={5}
          starDimension="18px"
          starSpacing="1px"
          starRatedColor="#FFC700"
        />
      </div>
    </div>
  );
}

export default ProductRate;
