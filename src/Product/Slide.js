import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";

const Slide = () => {
  return (
    <Swiper
      modules={[Autoplay]}
      spaceBetween={0}
      slidesPerView={1}
      loop={true}
      autoplay={{ delay: 3000 }}
      className="product-slider"
    >
      <SwiperSlide>
        <img
          src="https://lakuemas.oss-ap-southeast-5.aliyuncs.com/ecommerce/slider/slider-001-lakushop-lakuemas.png"
          alt="slide1"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="https://lakuemas.oss-ap-southeast-5.aliyuncs.com/ecommerce/slider/slider-002-lakushop-lakuemas.png"
          alt="slide2"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="https://lakuemas.oss-ap-southeast-5.aliyuncs.com/ecommerce/slider/slider-003-lakushop-lakuemas.png"
          alt="slide3"
        />
      </SwiperSlide>
    </Swiper>
  );
};

export default Slide;
