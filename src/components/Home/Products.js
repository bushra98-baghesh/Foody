import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { useGetAllCategoriesQuery } from "../../redux/slices/categoriesApi";
import ProductCard from "../product/ProductCard";
import { useGetAllProductsQuery } from "../../redux/slices/productsApi";
import CategoriesSkeleton from "../skeletons/CategoriesSkeleton";
import ProductsSkeleton from "../skeletons/ProductsSkeleton";
import { useLang } from "../LangProvider";
function Popular() {
  const { lan } = useLang();
  const { data: categories, isLoading: categoriesLoading } =
    useGetAllCategoriesQuery();
  const { data: products, isLoading: productsLoading } =
    useGetAllProductsQuery();
  const productsData = products?.data;

  const categoriesItems = categories?.data;
  const [productState, setProductState] = useState(productsData);
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
  const getProductInCategory = (cat) => {
    const filteredItems = productsData.filter(
      (item) => item.category.id === cat.id
    );
    setProductState(filteredItems);
  };

  useEffect(() => {
    updateSlidesPerView();
    setProductState(productsData);
    window.addEventListener("resize", updateSlidesPerView);
    return () => window.removeEventListener("resize", updateSlidesPerView);
  }, [productsData]);

  return (
    <div className="px-6  py-6 ">
      {categoriesLoading ? (
        <CategoriesSkeleton />
      ) : (
        <div className="flex-col px-3 space-y-5 py-3">
          <div className="flex items-center justify-between py-2 ">
            <h1 className=" text-xl font-bold text-[#C4C4C4]">Categories</h1>
          </div>

          <Swiper spaceBetween={15} slidesPerView={slidesPerView}>
            {categoriesItems &&
              categoriesItems.map((cat) => {
                const name =
                  lan === "en"
                    ? cat.name
                      ? cat.name
                      : "No Data..."
                    : cat.name_ar
                    ? cat.name_ar
                    : "No Data...";
                return (
                  <SwiperSlide
                    key={cat.id}
                    onClick={() => {
                      getProductInCategory(cat);
                    }}
                  >
                    <div className="focus-within:text-[#DC0D28] ">
                      <button className=" sm:h-32 h-24 overflow-hidden focus-within:border-[#DC0D28]  rounded-lg cursor-pointer text-[#C4C4C4]  hover:border-[#DC0D28] border-2 border-[#C4C4C4] transition duration-300 ease-in-out flex flex-col items-center justify-center  w-full">
                        <img
                          src={cat.image}
                          alt="img"
                          className=" object-center object-cover h-28  rounded-lg hover:scale-110 hover:opacity-60 ease-in-out duration-200 transition-all"
                        />
                      </button>
                      <h1 className="text-sm py-2 text-center cursor-pointer sm:text-base md:text-lg font-semibold pb-1  text-[#DC0D28] ">
                        {name}
                      </h1>
                    </div>
                  </SwiperSlide>
                );
              })}
          </Swiper>
        </div>
      )}
      {productsLoading ? (
        <ProductsSkeleton />
      ) : (
        <div className="grid   gap-4 grid-col-1 sm:grid-cols-2 space-y-4 sm:space-y-0  items-center justify-center py-4  ">
          {productState?.map((product) => {
            return <ProductCard data={product} key={product.id} lan={lan} />;
          })}
        </div>
      )}
    </div>
  );
}

export default Popular;
