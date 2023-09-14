import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import Photo from "../../assets/offer.jpg";
import Photo1 from "../../assets/topoffer.png";

function TopOffers() {
  return (
    <div className=" container rounded-xl mx-auto  py-4  ">
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
          <div className="max-w-3xl flex mx-auto  items-center justify-center   ">
            <img
              src={Photo}
              alt=""
              className=" opacity-60 object-center object-cover max-h-52 w-full rounded-2xl"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="max-w-3xl flex mx-auto  items-center justify-center   ">
            <img
              src={Photo1}
              alt=""
              className="  opacity-60 object-center object-cover max-h-52 w-full rounded-2xl "
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default TopOffers;
