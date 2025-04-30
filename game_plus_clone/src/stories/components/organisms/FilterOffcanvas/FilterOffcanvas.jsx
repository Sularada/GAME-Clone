"use client";
import { useState } from "react";
import "./style.scss";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import NextImage from "../../atoms/Img/NextImage";
import H2 from "../../atoms/H2/H2";
import { Form } from "react-bootstrap";
const FilterOffcanvas = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Button
        className="d-flex gap-2 align-items-center d-lg-none bg-black border-0 w-100"
        onClick={handleShow}
      >
        <NextImage
          src={"/images/filter_icon.svg"}
          width={24}
          height={24}
          alt={"filter icon svg"}
        />{" "}
        <Form.Control
          className="bg-dark border-0 text-light w-100 fs-5"
          type="search"
          placeholder="Oyun ismine göre ara"
        />
      </Button>

      <Offcanvas
        show={show}
        onHide={handleClose}
        responsive="lg"
        variant
        className="mt-5  bg-black"
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
        <Offcanvas.Body>
          <p className="mb-0">
            This is content within an <code>.offcanvas-lg</code>.
          </p>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default FilterOffcanvas;
