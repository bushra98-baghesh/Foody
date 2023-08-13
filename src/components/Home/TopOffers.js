import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import Photo from "../../assets/topoffer.png";
import Photo1 from "../../assets/topoffer2.png";

function TopOffers() {
  return (
    <div className=" container rounded-xl mx-auto  py-6  ">
      <Swiper
        loop={true}
        speed={4000}
        autoplay={{
          delay: 2500,
          disableOnInteraction: true,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        spaceBetween={15}
        slidesPerView={1}
      >
        <SwiperSlide>
          <div className="max-w-3xl flex mx-auto  rounded-2xl items-center justify-center px-4  ">
            <img
              src={Photo}
              alt=""
              className=" opacity-60 w-full object-cover"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="max-w-3xl flex mx-auto   rounded-2xl items-center justify-center px-4  ">
            <img
              src={Photo1}
              alt=""
              className=" opacity-60 w-full object-cover"
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default TopOffers;
