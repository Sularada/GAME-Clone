"use client";
import "./style.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import Image from "next/image";

const Slider = ({ slides }) => {
  return (
    <Swiper
      pagination={true}
      modules={[Pagination]}
      className="gameSwiper pb-5 w-100"
      centeredSlides={true}
      spaceBetween={24}
      loop={true}
      breakpoints={{
        768: {
          slidesPerView: 1,
          centeredSlides: false,
        },
        0: {
          slidesPerView: 1.5,
          centeredSlides: true,
        },
      }}
    >
      {slides.map((slide) => {
        return (
          <SwiperSlide>
            <picture>
              <source media={slide.media} srcSet={slide.src} />
              <source media={slide.media_0} srcSet={slide.src_0} />
              <Image
                src={slide.src.trimStart()}
                alt={slide.alt}
                width={500}
                height={500}
              ></Image>
            </picture>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default Slider;
