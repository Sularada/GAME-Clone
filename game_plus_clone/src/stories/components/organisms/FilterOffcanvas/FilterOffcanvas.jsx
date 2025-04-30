"use client";
import { useState } from "react";
import "./style.scss";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import NextImage from "../../atoms/Img/NextImage";
import H2 from "../../atoms/H2/H2";
import Accordion from "react-bootstrap/Accordion";
import H3 from "../../atoms/H3/H3";
const FilterOffcanvas = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Button
        className="d-flex gap-2  d-lg-none bg-black border-0"
        onClick={handleShow}
      >
        <NextImage
          src={"/images/filter_icon.svg"}
          width={24}
          height={24}
          alt={"filter icon svg"}
        />{" "}
      </Button>

      <Offcanvas
        show={show}
        onHide={handleClose}
        responsive="lg"
        variant
        className=" bg-black filter-canvas"
      >
        <Offcanvas.Header className="gap-2">
          <NextImage
            src={"/images/close_filter_icon.svg"}
            width={24}
            height={24}
            alt={"filter close icon svg"}
            className="close-filter-icon"
            onClick={handleClose}
          />
          <Offcanvas.Title>
            <H2 text={"Filtreler"} classes={"text-white fs-5 p-0 m-0"} />
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className="w-100">
          <Accordion
            defaultActiveKey={["0", "1"]}
            flush
            alwaysOpen
            className="w-100"
          >
            <Accordion.Item eventKey="0" className="border-0 mb-3">
              <Accordion.Header className="p-0">
                <H3 text={"Platform"} classes="text-light fw-normal fs-5" />
              </Accordion.Header>
              <Accordion.Body>
                {" "}
                <div>
                  <div>
                    <label className="checkbox">
                      <input
                        type="checkbox"
                        className="checkbox-input "
                        name=""
                        value="Steam"
                      />
                      <span className="text-white">Steam</span>
                    </label>
                  </div>
                  <div>
                    <label className="checkbox sc-eqIVtm hDqGEX">
                      <input
                        type="checkbox"
                        className="checkbox-input text-white"
                        name=""
                        value="Epic Games"
                      />
                      <span className="text-white">Epic Games</span>
                    </label>
                  </div>
                </div>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1" className="border-0">
              <Accordion.Header className="p-0">
                <H3 text={"Oyun türü"} classes="text-light fw-normal fs-5" />
              </Accordion.Header>
              <Accordion.Body>
                <div>
                  <div>
                    <label className="checkbox">
                      <input
                        type="checkbox"
                        className="checkbox-input "
                        name=""
                        value="Strateji"
                      />
                      <span className="text-white">Strateji</span>
                    </label>
                  </div>
                  <div>
                    <label className="checkbox sc-eqIVtm hDqGEX">
                      <input
                        type="checkbox"
                        className="checkbox-input text-white"
                        name=""
                        value="Simülasyon"
                      />
                      <span className="text-white">Simülasyon</span>
                    </label>
                  </div>
                </div>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default FilterOffcanvas;
