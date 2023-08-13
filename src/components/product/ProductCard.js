import React from "react";
import { RiArrowRightSFill } from "react-icons/ri";
import StarRatings from "react-star-ratings";
import Photo from "../../assets/Rectangle 41888.png";
import { Link } from "react-router-dom";
function ProductCard() {
  return (
    <Link
      to="productdetails"
      className="flex shadow-lg justify-between  w-full overflow-hidden  border-2 border-[#d3cfcf] rounded-xl border-glass bg-white"
    >
      <div className="rounded-xl hover:scale-110 transition-all duration-300 ease-in-out  overflow-hidden">
        <img
          src={Photo}
          alt="img"
          className=" h-full w-36 object-cover object-center"
        />
      </div>
      <div className=" flex flex-1 flex-col items-start p-3 text-start ">
        <h1 className="font-bold md:text-xl text-base  text-black mb-2">
          Mac Cheese Burger
        </h1>
        <div className="space-y-1 ">
          <h1 className="font-semibold text-xs sm:text-sm text-[#959393]">
            Ingredients
          </h1>
          <p className=" sm:text-lg text-sm  font-semibold text-black">
            Lorem ipsum dolor sit amet consectetur.......
          </p>
          <div className="flex flex-col sm:flex-row  sm:justify-between ">
            <h1 className="font-bold text-sm md:text-lg  text-[#DC0D28]">
              20.00$
            </h1>
            <StarRatings
              rating={2.403}
              numberOfStars={5}
              starDimension="20px"
              starSpacing="1px"
              starRatedColor="#FFC700"
            />
          </div>
        </div>
      </div>
      <div className="sm:flex hidden  items-center justify-center sm:mx-6 md:mx-8 mx-1">
        <RiArrowRightSFill size={35} />
      </div>
    </Link>
  );
}

export default ProductCard;
