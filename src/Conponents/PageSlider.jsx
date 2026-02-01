import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const PageSlider = () => {
  return (
    <div className="max-w-3xl mx-auto my-20">
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={20}
        slidesPerView={3}
       
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        navigation
        pagination={{ clickable: true }}
        className="w-full"
      >
        <SwiperSlide className="flex justify-center">
          <div className="group w-[260px] h-[320px] bg-white rounded-2xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
            <img
              src="https://images.unsplash.com/photo-1769650796145-30df10357926?w=600&auto=format&fit=crop&q=60"
              alt=""
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
            />
          </div>
        </SwiperSlide>

        <SwiperSlide className="flex justify-center">
          <div className="group w-[260px] h-[320px] bg-white rounded-2xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
            <img
              src="https://images.unsplash.com/photo-1761839256601-e768233e25e7?w=600&auto=format&fit=crop&q=60"
              alt=""
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
            />
          </div>
        </SwiperSlide>

        <SwiperSlide className="flex justify-center">
          <div className="group w-[260px] h-[320px] bg-white rounded-2xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
            <img
              src="https://plus.unsplash.com/premium_photo-1693671725924-302f7a2c450b?w=600&auto=format&fit=crop&q=60"
              alt=""
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
            />
          </div>
        </SwiperSlide>

        <SwiperSlide className="flex justify-center">
          <div className="group w-[260px] h-[320px] bg-white rounded-2xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
            <img
              src="https://images.unsplash.com/photo-1548438294-1ad5d5f4f063?w=600&auto=format&fit=crop&q=60"
              alt=""
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
            />
          </div>
        </SwiperSlide>

        <SwiperSlide className="flex justify-center">
          <div className="group w-[260px] h-[320px] bg-white rounded-2xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
            <img
              src="https://images.unsplash.gcom/photo-1505816014357-96b5ff457e9a?w=600&auto=format&fit=crop&q=60"
              alt=""
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
            />
          </div>
        </SwiperSlide>

        <SwiperSlide className="flex justify-center">
          <div className="group w-[260px] h-[320px] bg-white rounded-2xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
            <img
              src="https://images.unsplash.com/photo-1543269664-56d93c1b41a6?w=600&auto=format&fit=crop&q=60"
              alt=""
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default PageSlider;
