"use client";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import Slide from "../../molecules/Slide/Slide";
import Image from "next/image";

const Slider = ({ slides }) => {
  return (
    <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
      {slides.map((slide) => {
        return (
          <SwiperSlide>
            <picture>
              <source media={slide.media} srcset={slide.src} />
              <source media={slide.media_0} srcset={slide.src_0} />
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
