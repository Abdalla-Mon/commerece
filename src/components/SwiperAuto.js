import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "../sass/App.css";

// import required modules
import { Autoplay, Navigation } from "swiper";

export default function SwiperAuto() {
  const arr = [
    "./imgs/client-logo-1.png",
    "./imgs/client-logo-2.png",
    "./imgs/client-logo-3.png",
    "./imgs/client-logo-4.png",
    "./imgs/client-logo-2.png",
  ];
  return (
    <>
      <Swiper
        spaceBetween={30}
        slidesPerView={"auto"}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        navigation={true}
        loop={true}
        modules={[Autoplay, Navigation]}
        className="offers-swiper"
      >
        {arr.map((img, index) => {
          return (
            <SwiperSlide key={index}>
              {" "}
              <img src={img} alt={img}></img>
            </SwiperSlide>
          );
        })}
        {arr.map((img, index) => {
          return (
            <SwiperSlide key={index + 10}>
              {" "}
              <img src={img} alt={img}></img>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
}
