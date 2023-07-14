import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Mousewheel, Pagination } from "swiper";

export function AboutSwiper() {
  return (
    <>
      <Swiper
        direction={"vertical"}
        slidesPerView={1}
        effect={"fade"}
        mousewheel={true}
        pagination={{
          clickable: true,
        }}
        modules={[Mousewheel, Pagination]}
        className="aboutSwiper"
      >
        <SwiperSlide>
          {" "}
          <div className="swiper-padding">
            <div className="img-holder-1 img-holder"></div>
            <div className="slider-text">
              <h5>12 December 2021</h5>
              <h3>lorem Slide 1</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Blanditiis harum itaque, modi dolore minima consequatur ut
                voluptatum omnis dolorum laboriosam beatae quas iusto
                perspiciatis possimus, amet quidem illum nesciunt at1.
              </p>
              <button>Show More</button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div className="swiper-padding">
            <div className="img-holder-2 img-holder"></div>
            <div className="slider-text">
              <h5>16 May 2022</h5>
              <h3>lorem Slide 2</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Blanditiis harum itaque, modi dolore minima consequatur ut
                voluptatum omnis dolorum laboriosam beatae quas iusto
                perspiciatis possimus, amet quidem illum nesciunt at1.
              </p>
              <button>Show More</button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div className="swiper-padding">
            <div className="img-holder-3 img-holder"></div>
            <div className="slider-text">
              <h5>15 February 2023</h5>
              <h3>lorem Slide 3</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Blanditiis harum itaque, modi dolore minima consequatur ut
                voluptatum omnis dolorum laboriosam beatae quas iusto
                perspiciatis possimus, amet quidem illum nesciunt at1.
              </p>
              <button>Show More</button>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
