"use client";
import { useState } from "react";
import "./style.scss";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import NextImage from "../../atoms/Img/NextImage";
import H2 from "../../atoms/H2/H2";
import Accordion from "react-bootstrap/Accordion";
import H3 from "../../atoms/H3/H3";
import { FilterAccordionItem } from "../../molecules/AccordionItem/AccordionItem";
const FilterOffcanvas = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const filters = [
    {
      title: "Platform",
      eventKey: "1",
      items: [
        { label: "Stream", value: "stream" },
        { label: "Epic Games", value: "epic-games" },
      ],
    },
    {
      title: "Oyun Türü",
      eventKey: "2",
      items: [
        { label: "Strateji", value: "strateji" },
        { label: "Simülasyon", value: "simulasyon" },
      ],
    },
  ];
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
            <H2
              text={"Filtreler"}
              classes={
                "text-white fs-5 fw-normal p-0 mt-2 mb-5 d-none d-lg-block"
              }
            />
            {filters.map((filter) => {
              return (
                <FilterAccordionItem
                  eventKey={filter.eventKey}
                  title={filter.title}
                  items={filter.items}
                />
              );
            })}
          </Accordion>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default FilterOffcanvas;
