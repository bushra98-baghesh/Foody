import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { CiBurger } from "react-icons/ci";
import { RiArrowLeftSFill } from "react-icons/ri";
import StarRatings from "react-star-ratings";
import { useDispatch } from "react-redux";
import { setAddItemToCart } from "../redux/slices/cartSlice";
import { useGetProductDetailsQuery } from "../redux/slices/productsApi";
function ProductDetails() {
  const { id } = useParams();
  const {
    data: productDetails,
    isLoading: isLoadingProduct,
    isSuccess: isSuccessProduct,
  } = useGetProductDetailsQuery(id);
  const product = productDetails?.data;
  console.log(product);
  const dispatch = useDispatch();
  const addItemToCart = () => {
    dispatch(setAddItemToCart(product));
  };
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
    <div className="mx-auto max-w-3xl  min-h-screen dark:bg-black ">
      <div className=" relative   w-full">
        <Link
          to="/"
          className="bg-white z-20  absolute left-0 mx-5 my-6 p-2 border-2 border-[#d3cfcf] shadow-lg rounded-lg"
        >
          <RiArrowLeftSFill size={25} />
        </Link>

        <img
          src={product?.image}
          alt="img"
          className=" w-full h-80 hover:h-96 opacity-80 bg-black duration-300 transition-all ease-in-out shadow-lg  object-cover object-center"
        />
      </div>
      <div className="bg-white  shadow-[0px_-16px_15px_-6px_rgba(0,0,0,0.64)] rounded-t-3xl -mt-4 relative z-40 ">
        <div className="py-4 px-10 flex flex-col sm:flex-row items-center justify-between text-start ">
          <h1 className="font-bold md:text-2xl sm:text-xl text-lg tracking-wider  text-[#323232] mb-2">
            {product?.name}
          </h1>
          <h1 className="font-bold text-lg  text-[#DC0D28]">
            {product?.price} USD
          </h1>
        </div>
        <div className="flex-col px-4  items-center justify-center  ">
          <StarRatings
            rating={2.403}
            numberOfStars={5}
            starDimension="30px"
            starSpacing="1px"
            starRatedColor="#FFC700"
          />
          <div className="py-6 space-y-2">
            <p className="  font-semibold text-[#323232]">
              {product?.ingredients}
            </p>
          </div>
        </div>

        <div className="text-start space-y-4 px-4 py-4">
          <h1 className="font-semibold text-base sm:text-lg md:text-xl text-[#959393] ">
            Add Extra Ingredients
          </h1>

          <Swiper spaceBetween={15} slidesPerView={slidesPerView}>
            <SwiperSlide>
              <div className="rounded-lg  text-[#C4C4C4] hover:text-[#DC0D28] hover:border-[#DC0D28]  border-2 border-[#C4C4C4] transition  duration-300 ease-in-out flex items-center justify-center py-1    ">
                <Link>
                  <CiBurger size={50} className="mx-auto px-1 sm:px-0 " />
                  <h1 className=" text-xs sm:text-base md:text-lg font-semibold pb-1  ">
                    Honey
                  </h1>
                </Link>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="rounded-lg  text-[#C4C4C4] hover:text-[#DC0D28] hover:border-[#DC0D28]  border-2 border-[#C4C4C4] transition  duration-300 ease-in-out flex items-center justify-center py-1    ">
                <Link>
                  <CiBurger size={50} className="mx-auto px-1 sm:px-0 " />
                  <h1 className=" text-xs sm:text-base md:text-lg font-semibold pb-1  ">
                    Cheese
                  </h1>
                </Link>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="rounded-lg  text-[#C4C4C4] hover:text-[#DC0D28] hover:border-[#DC0D28]  border-2 border-[#C4C4C4] transition  duration-300 ease-in-out flex items-center justify-center py-1    ">
                <Link>
                  <CiBurger size={50} className="mx-auto px-1 sm:px-0 " />
                  <h1 className=" text-xs sm:text-base md:text-lg font-semibold pb-1  ">
                    Soya Sause
                  </h1>
                </Link>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="rounded-lg  text-[#C4C4C4] hover:text-[#DC0D28] hover:border-[#DC0D28]  border-2 border-[#C4C4C4] transition  duration-300 ease-in-out flex items-center justify-center py-1    ">
                <Link>
                  <CiBurger size={50} className="mx-auto px-1 sm:px-0 " />
                  <h1 className=" text-xs sm:text-base md:text-lg font-semibold pb-1  ">
                    Katchab
                  </h1>
                </Link>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="rounded-lg  text-[#C4C4C4] hover:text-[#DC0D28] hover:border-[#DC0D28]  border-2 border-[#C4C4C4] transition  duration-300 ease-in-out flex items-center justify-center py-1    ">
                <Link>
                  <CiBurger size={50} className="mx-auto px-1 sm:px-0 " />
                  <h1 className=" text-xs sm:text-base md:text-lg font-semibold pb-1  ">
                    Ham
                  </h1>
                </Link>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>

        <div className="bg-white w-full  bottom-0 text-clip  shadow-inner  max-w-4xl items-center justify-between border-2 rounded-lg flex  gap-4 space-y-2 sm:space-y-0  px-6 mx-auto py-6 my-6">
          <button
            onClick={addItemToCart}
            className="bg-black rounded-lg px-1 py-2 w-full text-white font-medium text-base"
          >
            Add Order
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
