import React from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Photo from "../assets/Rectangle 41888.png";
import { CiBurger } from "react-icons/ci";
import { RiArrowLeftSFill } from "react-icons/ri";
import StarRatings from "react-star-ratings";
function ProductDetails() {
  return (
    <div className="mx-auto max-w-3xl h-screen ">
      <div className=" relative h-2/3  w-full">
        <Link
          to="/"
          className="bg-white absolute left-0 mx-5 my-6 p-2 border-2 border-[#d3cfcf] shadow-lg rounded-lg"
        >
          <RiArrowLeftSFill size={25} />
        </Link>

        <img
          src={Photo}
          alt="img"
          className="h-full w-full shadow-lg rounded-lg object-cover object-center"
        />
      </div>
      <div className="py-4 flex items-center justify-between px-4">
        <h1 className="font-bold md:text-2xl text-xl  text-black mb-2">
          Mac Cheese Burger
        </h1>
        <h1 className="font-bold text-lg  text-[#DC0D28]">20.00$</h1>
      </div>
      <div className="flex-col px-4  items-start justify-start text-start ">
        <StarRatings
          rating={2.403}
          numberOfStars={5}
          starDimension="30px"
          starSpacing="1px"
          starRatedColor="#FFC700"
        />
        <div className="py-6 space-y-2">
          <h1 className="font-semibold text-lg  text-[#959393]">About</h1>
          <p className="  font-semibold text-black">
            Lorem ipsum dolor sit amet consectetur.......
          </p>
        </div>
      </div>

      <div className="text-start space-y-4 px-4 py-4">
        <h1 className="font-semibold text-lg text-[#959393] ">
          Add Extra Ingredients
        </h1>

        <Swiper spaceBetween={15} slidesPerView={5}>
          <SwiperSlide>
            <div className="rounded-lg  text-[#C4C4C4] hover:text-[#DC0D28] hover:border-[#DC0D28]  border-2 border-[#C4C4C4] transition  duration-300 ease-in-out flex items-center justify-center py-1    ">
              <Link>
                <CiBurger size={50} className="mx-auto px-1 sm:px-0 " />
                <h1 className=" text-xs sm:text-base md:text-lg font-semibold pb-1  ">
                  Burger
                </h1>
              </Link>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="rounded-lg  text-[#C4C4C4] hover:text-[#DC0D28] hover:border-[#DC0D28]  border-2 border-[#C4C4C4] transition  duration-300 ease-in-out flex items-center justify-center py-1    ">
              <Link>
                <CiBurger size={50} className="mx-auto px-1 sm:px-0 " />
                <h1 className=" text-xs sm:text-base md:text-lg font-semibold pb-1  ">
                  Burger
                </h1>
              </Link>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="rounded-lg  text-[#C4C4C4] hover:text-[#DC0D28] hover:border-[#DC0D28]  border-2 border-[#C4C4C4] transition  duration-300 ease-in-out flex items-center justify-center py-1    ">
              <Link>
                <CiBurger size={50} className="mx-auto px-1 sm:px-0 " />
                <h1 className=" text-xs sm:text-base md:text-lg font-semibold pb-1  ">
                  Burger
                </h1>
              </Link>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="rounded-lg  text-[#C4C4C4] hover:text-[#DC0D28] hover:border-[#DC0D28]  border-2 border-[#C4C4C4] transition  duration-300 ease-in-out flex items-center justify-center py-1    ">
              <Link>
                <CiBurger size={50} className="mx-auto px-1 sm:px-0 " />
                <h1 className=" text-xs sm:text-base md:text-lg font-semibold pb-1  ">
                  Burger
                </h1>
              </Link>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="rounded-lg  text-[#C4C4C4] hover:text-[#DC0D28] hover:border-[#DC0D28]  border-2 border-[#C4C4C4] transition  duration-300 ease-in-out flex items-center justify-center py-1    ">
              <Link>
                <CiBurger size={50} className="mx-auto px-1 sm:px-0 " />
                <h1 className=" text-xs sm:text-base md:text-lg font-semibold pb-1  ">
                  Burger
                </h1>
              </Link>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>

      <div className="bg-white w-full  bottom-0 text-clip  shadow-inner  max-w-4xl items-center justify-between border-2 rounded-lg flex gap-10  px-6 mx-auto py-6 my-6">
        <div className="flex shadow-lg shadow-black/30 items-center rounded-md border-2 justify-between gap-6  mx-auto">
          <button className=" px-2 font-medium">-</button>
          <div className=" text-black rounded-full text-base text-center font-medium px-3 py-1">
            2
          </div>
          <button className=" px-1.5 font-medium ">+</button>
        </div>
        <button className="bg-black rounded-lg px-1 py-2 w-2/3 text-white font-medium text-lg">
          Add Order
        </button>
      </div>
    </div>
  );
}

export default ProductDetails;
