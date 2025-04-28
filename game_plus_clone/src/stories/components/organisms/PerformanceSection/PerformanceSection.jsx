"use client";
import "./style.scss";
import H2 from "../../atoms/H2/H2";
import NextImage from "../../atoms/Img/NextImage";
import { useState } from "react";
import { Col, Row } from "react-bootstrap";
import H3 from "../../atoms/H3/H3";
import P from "../../atoms/P/P";

const PerformanceSection = () => {
  const [imgW, setImgW] = useState(50);
  function slide() {
    let slideValue = document.getElementById("slider").value;
    setImgW(slideValue);
    document.getElementById("rtx-off-item").style.clipPath =
      "polygon(0 0," + slideValue + "% 0," + slideValue + "% 100%, 0 100%)";

    console.log(
      "polygon(0 0," + slideValue + "% 0," + slideValue + "% 100%, 0 100%)"
    );
  }
  return (
    <section className="performance-section px-4 my-5">
      <H2
        text={"GeForce NOW Performance & Ultimate Abonelikleri"}
        classes={"text-primary text-center line"}
      />
      <div className="img-container">
        <NextImage
          src={
            "https://gameplus.com.tr/static/media/compare-image-ultimate.06a62252.png"
          }
          width={1175}
          height={437}
          alt={"rtx on"}
          className={"rtx-on w-100"}
        />
        <NextImage
          src={
            "https://gameplus.com.tr/static/media/compare-image-performance.524bd64c.png"
          }
          width={1175}
          height={437}
          alt={"rtx off"}
          className={"rtx-off w-100"}
          id={"rtx-off-item"}
        />
        <input
          type="range"
          min="0"
          max="100"
          value={imgW}
          id="slider"
          onChange={slide}
          className="position-absolute top-50 start-50 translate-middle z-3"
        ></input>
      </div>
      <div className="mt-4">
        <Row className="justify-content-center">
          <Col md={5}>
            <H3
              text={"NVIDIA GeForce NOW Performance"}
              classes={"text-primary fw-normal text-start fs-4"}
            />
            <P
              text={
                "NVIDIA GeForce NOW Performance aboneliğinde, grafik kartı olarak RTX serisi GPU’lar kullanılır. Bu abonelik, 1440p çözünürlüke 60 FPS ekran yenileme hızı sunar. NVIDIA DLSS ve RTX ON (Ray Tracing) desteği bulunur. Performance aboneliği, makul bir grafik kalitesi ve performans arayan oyuncular için tasarlanmıştır."
              }
              classes={"text-light text-start"}
            />
          </Col>
          <Col md={5}>
            <H3
              text={"NVIDIA GeForce NOW Ultimate"}
              classes={"text-primary fw-normal text-start fs-4"}
            />
            <P
              text={
                "NVIDIA GeForce NOW Ultimate aboneliğinde, grafik kartı olarak üst düzey performans sunan NVIDIA RTX 4080 GPU'ları kullanılır. Bu abonelik, 4K çözünürlüğe kadar destek verir ve 1440p'de 240 Hz'ye kadar, 4K çözünürlükte ise 120 FPS ekran yenileme hızı sağlar. Ayrıca NVIDIA DLSS 3, RTX ON (Ray Tracing) ve NVIDIA Reflex gibi gelişmiş NVIDIA teknolojileri tam olarak desteklenir. Ultimate abonelik, en üst düzey görsel kalite ve düşük gecikme performansı isteyen oyuncular için özel olarak tasarlanmıştır."
              }
              classes={"text-light text-start"}
            />
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default PerformanceSection;
