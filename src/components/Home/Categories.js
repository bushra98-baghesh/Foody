import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { RiArrowRightSFill } from "react-icons/ri";
import { CiBurger } from "react-icons/ci";
import "swiper/css";
import { Link } from "react-router-dom";
function Categories() {
  const [slidesPerView, setSlidesPerView] = useState(2);
  const breakpoints = {
    200: 2,
    350: 3,
    500: 4,
    600: 5,
  };
  const updateSlidesPerView = () => {
    const screenWidth = window.innerWidth;
    for (const breakpoint in breakpoints) {
      if (screenWidth >= parseInt(breakpoint)) {
        setSlidesPerView(breakpoints[breakpoint]);
      }
    }
  };
  useEffect(() => {
    // Call the function on initial render
    updateSlidesPerView();

    // Attach a resize event listener to update the slidesPerView on window resize
    window.addEventListener("resize", updateSlidesPerView);

    // Clean up the event listener on component unmount
    return () => window.removeEventListener("resize", updateSlidesPerView);
  }, []);
  return (
    <div className="flex-col px-6 space-y-5 py-6 ">
      <div className="flex items-center justify-between py-2 ">
        <h1 className=" text-xl font-bold text-[#C4C4C4]">Categories</h1>
      </div>

      <Swiper spaceBetween={15} slidesPerView={slidesPerView}>
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
  );
}

export default Categories;
