import Image from "next/image";
import { SwiperSlide } from "swiper/react";

const Slide = ({ slide }) => {
  return (
    <SwiperSlide spaceBetween={50}>
      <Image
        src={slide.src.trimStart()}
        alt={slide.alt}
        width={500}
        height={500}
      ></Image>
    </SwiperSlide>
  );
};

export default Slide;
