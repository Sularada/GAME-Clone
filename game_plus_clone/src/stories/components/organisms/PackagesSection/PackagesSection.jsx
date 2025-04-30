"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import H2 from "../../atoms/H2/H2";

import {
  PackageCardVersionOne,
  PackageCardVersionThree,
  PackageCardVersionTwo,
} from "../../molecules/PackagesCard/PackageCard";

const PackagesSection = () => {
  const ultimate = {
    title: "ULTIMATE",
    packages: {
      limitless: [
        {
          month: "6 Ay",
          badge: "%20",
          purchase: "4 taksit imkanı ile",
          before: "3400 ₺",
          price: "2720  ₺",
        },
        { month: "3 Ay", purchase: "3 taksit imkanı ile", price: "2000  ₺" },
        { month: "1 Ay", price: "2720  ₺" },
      ],
      limited: [
        {
          month: "Ultimate Gece",
          purchase: "01:00 ile 13:00 arası",
          price: "380 ₺",
        },
      ],
    },
    variant: "secondary",
  };
  const performance = {
    title: "PERFORMANCE",
    packages: {
      limitless: [
        {
          month: "6 11+1 Ay",
          badge: "%40",
          purchase: "3 taksit imkanı ile",
          before: "2880 ₺",
          price: "1720 ₺",
        },
        { month: "6 Ay", badge: "%40", before: "1580 ₺ ", price: "940 ₺" },
        { month: "1 Ay", price: "380 ₺" },
        { month: "1 Hafta", price: "170 ₺" },
      ],
      limited: [
        {
          month: "Performance Deneme",
          purchase: "Haftalık 8 Saat Kullanım",
          price: "59 ₺",
        },
        {
          month: "Performance Gündüz",
          purchase: "07:00 ile 18:00 arası",
          price: "190 ₺",
        },
      ],
    },
    variant: "secondary",
  };
  const ubisoft = {
    title: "Ubisoft+ Cloud Play",
    month: "1 Ay",
    before: "639 ₺",
    price: "449 ₺",
    variant: "warning",
  };

  return (
    <section className="px-4">
      <H2 text={"Paketler"} classes={"text-primary text-center line mb-5"} />
      <div>
        <Swiper
          pagination={true}
          modules={[Pagination]}
          className=" pb-5 w-100 h-auto"
          spaceBetween={24}
          breakpoints={{
            768: {
              slidesPerView: 2,
              centeredSlides: false,
            },
            0: {
              slidesPerView: 1,
              centeredSlides: true,
            },
          }}
        >
          <SwiperSlide className="bg-dark w-auto">
            <PackageCardVersionOne data={ultimate} />
          </SwiperSlide>
          <SwiperSlide className="bg-dark w-auto">
            <PackageCardVersionOne data={performance} />
          </SwiperSlide>
          <SwiperSlide className="bg-dark w-auto">
            <PackageCardVersionTwo data={ubisoft} />
          </SwiperSlide>
          <SwiperSlide className="bg-dark w-auto">
            <PackageCardVersionThree />
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default PackagesSection;
