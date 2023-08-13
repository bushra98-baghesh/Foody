import React from "react";
import { Link } from "react-router-dom";
import ProductRate from "../components/product/ProductRate";
import StarRatings from "react-star-ratings";
function RatingPage() {
  return (
    <div className="mx-auto  max-w-3xl space-y-4 min-h-screen py-10 px-6 ">
      <h1 className="text-2xl tracking-widest font-semibold text-[#C4C4C4] pb-10">
        We appreciate your feedback
      </h1>
      <div className=" text-start ">
        <h1 className="text-[#C4C4C4] font-medium text-base">Service Rate </h1>
        <div className="flex items-center justify-center">
          <StarRatings
            rating={2.403}
            numberOfStars={5}
            starDimension="40px"
            starSpacing="1px"
            starRatedColor="#FFC700"
          />
        </div>
      </div>
      <div className=" text-start space-y-4 py-2 ">
        <h1 className="text-[#C4C4C4] font-medium text-base">Meals Rate</h1>
        <div className="border-2 rounded-lg max-w-xl mx-auto py-4 ">
          <ProductRate />
          <ProductRate />
          <ProductRate />
        </div>
      </div>
      <div className=" text-start ">
        <h1 className="text-[#C4C4C4] font-medium text-base">
          Tell us about your experience
        </h1>
        <div className="py-4 px-4">
          <div class="mb-6">
            <input
              placeholder="Add note"
              type="text"
              id="large-input"
              class="block w-full p-6 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md   dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>
        </div>
      </div>
      <div className="bg-white w-full  text-clip  shadow-inner  max-w-4xl items-center border-2 rounded-lg flex gap-10  px-6 mx-auto py-6 my-6">
        <Link
          to="successfully"
          className="bg-black rounded-lg px-1 py-2 w-full text-white font-medium text-lg"
        >
          OK
        </Link>
      </div>
    </div>
  );
}

export default RatingPage;
