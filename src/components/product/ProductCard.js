import React from "react";
import StarRatings from "react-star-ratings";
import { Link } from "react-router-dom";
import { useThemeHook } from "../ThemeProvider";
function ProductCard({ data, lan }) {
  const [theme] = useThemeHook();
  const rate = data.rating ? data.rating : Math.random() * 5;

  const name =
    lan === "en"
      ? data.name
        ? data.name
        : "No Data..."
      : data.name_ar
      ? data.name_ar
      : "No Data...";
  return (
    <Link
      to={`/${data.id}`}
      className="flex shadow-lg   justify-between w-full overflow-hidden  border-2 border-[#d3cfcf] rounded-xl border-glass "
    >
      <div className="rounded-xl max-h-36  hover:scale-110 transition-all duration-300 ease-in-out  overflow-hidden">
        <img
          src={data.image}
          alt="img"
          className=" min-h-full  w-36 object-cover object-center"
        />
      </div>
      <div className=" flex flex-1  flex-col items-start m-3 text-start ">
        <h1
          className={`${
            theme ? "text-white" : "text-black"
          } font-bold sm:text-base text-sm   mb-2`}
        >
          {name}
        </h1>
        <div className="space-y-2 ">
          <div className="flex space-x-1">
            {data.ingredients &&
              data.ingredients?.map((ing, index) => {
                const name =
                  lan === "en"
                    ? ing.name
                      ? ing.name
                      : "No Data..."
                    : ing.name_ar
                    ? ing.name_ar
                    : "No Data...";
                return (
                  <span
                    key={index}
                    className={`${
                      theme ? "text-[#d3cfcf]" : " text-[#545454]"
                    } font-normal text-xs block`}
                  >
                    {name}
                  </span>
                );
              })}
          </div>

          <div className="flex flex-col pt-1 sm:justify-between ">
            <h1 className="font-bold text-sm sm:text-base text-[#DC0D28]">
              {data.price} USD
            </h1>
            <StarRatings
              rating={rate}
              numberOfStars={5}
              starDimension="16px"
              starSpacing="1px"
              starRatedColor="#FFC700"
            />
          </div>
        </div>
      </div>
    </Link>
  );
}

export default ProductCard;
