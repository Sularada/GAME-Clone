"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import Image from "next/image";
import { Button, Col, Row } from "react-bootstrap";
import H2 from "../../atoms/H2/H2";
import NextImage from "../../atoms/Img/NextImage";
import H3 from "../../atoms/H3/H3";
import P from "../../atoms/P/P";
import { useRef } from "react";

const GeforceHowWork = () => {
  const swiperRef = useRef(null);
  return (
    <section className="my-5">
      <H2
        text={"Nasıl Çalışır?"}
        classes={"text-primary text-center line"}
      ></H2>
      <div>
        <Swiper
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          pagination={true}
          modules={[Pagination]}
          className=" pb-5 w-100 h-auto"
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
          <SwiperSlide className="bg-black">
            <Row>
              <Col sm={12} lg={6}>
                <NextImage
                  src={
                    "https://gameplus.com.tr/static/media/how-it-works-1.ec3efe03.png"
                  }
                  width={530}
                  height={330}
                  alt={"Geforce NOW Gaming"}
                />
              </Col>
              <Col sm={12} lg={6}>
                <div className="position-relative d-flex flex-column justify-content-center h-100">
                  <H3
                    text={"Oyunlar sunucularda çalışır."}
                    classes={"text-white text-start"}
                  />
                  <P
                    text={
                      "Oyunları başlattığında, cihazında çalışıyor gibi görünse de, aslında oyunlar yüksek performanslı uzak sunucularda çalışır."
                    }
                    classes={"text-light text-start"}
                  />
                  <div className="text-start">
                    <Button
                      variant="outline-primary"
                      className="fw-semibold me-4"
                      swiperRef={swiperRef}
                      onClick={() => swiperRef.current?.slidePrev()}
                    >
                      Önceki
                    </Button>
                    <Button
                      className="btn btn-primary"
                      swiperRef={swiperRef}
                      onClick={() => swiperRef.current?.slideNext()}
                    >
                      Sonraki
                    </Button>
                  </div>
                </div>
              </Col>
            </Row>
          </SwiperSlide>
          <SwiperSlide className="bg-black">
            <Row>
              <Col sm={12} lg={6}>
                <NextImage
                  src={
                    "https://gameplus.com.tr/static/media/how-it-works-2.8ea3092d.png"
                  }
                  width={530}
                  height={330}
                  alt={"Geforce NOW Gaming"}
                />
              </Col>
              <Col sm={12} lg={6}>
                <div className="position-relative d-flex flex-column justify-content-center h-100">
                  <H3
                    text={"Veriler sunucuya iletilir."}
                    classes={"text-white text-start"}
                  />
                  <P
                    text={
                      "Klavye, fare veya oyun kumandasıyla yaptığın her hareket anında sunuculara aktarılır."
                    }
                    classes={"text-light text-start"}
                  />
                  <div className="text-start">
                    <Button
                      variant="outline-primary"
                      className="fw-semibold me-4"
                      swiperRef={swiperRef}
                      onClick={() => swiperRef.current?.slidePrev()}
                    >
                      Önceki
                    </Button>
                    <Button
                      className="btn btn-primary"
                      swiperRef={swiperRef}
                      onClick={() => swiperRef.current?.slideNext()}
                    >
                      Sonraki
                    </Button>
                  </div>
                </div>
              </Col>
            </Row>
          </SwiperSlide>{" "}
          <SwiperSlide className="bg-black">
            <Row>
              <Col sm={12} lg={6}>
                <NextImage
                  src={
                    "https://gameplus.com.tr/static/media/how-it-works-3.4cf5c4d7.png"
                  }
                  width={530}
                  height={330}
                  alt={"Geforce NOW Gaming"}
                />
              </Col>
              <Col sm={12} lg={6}>
                <div className="position-relative d-flex flex-column justify-content-center h-100">
                  <H3
                    text={"Görüntüler sunucudan iletilir."}
                    classes={"text-white text-start"}
                  />
                  <P
                    text={
                      "Tüm hareketlerin sunucularda işlenir ve oyunun eşzamanlı olarak ekranına yansıtılır."
                    }
                    classes={"text-light text-start"}
                  />
                  <div className="text-start">
                    <Button
                      variant="outline-primary"
                      className="fw-semibold me-4"
                      swiperRef={swiperRef}
                      onClick={() => swiperRef.current?.slidePrev()}
                    >
                      Önceki
                    </Button>
                    <Button
                      className="btn btn-primary"
                      swiperRef={swiperRef}
                      onClick={() => swiperRef.current?.slideNext()}
                    >
                      Sonraki
                    </Button>
                  </div>
                </div>
              </Col>
            </Row>
          </SwiperSlide>{" "}
          <SwiperSlide className="bg-black">
            <Row>
              <Col sm={12} lg={6}>
                <NextImage
                  src={
                    "https://gameplus.com.tr/static/media/how-it-works-4.3b9b9daa.png"
                  }
                  width={530}
                  height={330}
                  alt={"Geforce NOW Gaming"}
                />
              </Col>
              <Col sm={12} lg={6}>
                <div className="position-relative d-flex flex-column justify-content-center h-100">
                  <H3
                    text={"Oyun keyfi başlasın!"}
                    classes={"text-white text-start"}
                  />
                  <P
                    text={
                      "Bu sayede dilediğin cihazdan, oyunları indirmeden hemen oynamaya başlayabilirsin."
                    }
                    classes={"text-light text-start"}
                  />
                  <div className="text-start">
                    <Button
                      variant="outline-primary"
                      className="fw-semibold me-4"
                      swiperRef={swiperRef}
                      onClick={() => swiperRef.current?.slidePrev()}
                    >
                      Önceki
                    </Button>
                    <Button
                      className="btn btn-primary"
                      swiperRef={swiperRef}
                      onClick={() => swiperRef.current?.slideNext()}
                    >
                      Sonraki
                    </Button>
                  </div>
                </div>
              </Col>
            </Row>
          </SwiperSlide>{" "}
        </Swiper>
      </div>
    </section>
  );
};

export default GeforceHowWork;
