"use client";
import "./style.scss";
import { useState } from "react";
import OffcanvasButton from "../../atoms/Button/OffcanvasButton";
import LogoLink from "../../molecules/LogoLink/LogoLink";
import { Offcanvas } from "react-bootstrap";
import OffcanvasHeader from "../../molecules/OffcanvasHeader/OffcanvasHeader";
import OffcanvasBody from "../../molecules/OffcanvasBody/OffcanvasBody";

const Header = ({ navlinks, geforce, ubisoft }) => {
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);
  return (
    <header className="d-flex flex-column position-absolute position-lg-fixed top-0 left-0">
      <div className="d-flex py-3 my-1">
        <OffcanvasButton className="d-lg-none" handleShow={handleShow} />{" "}
        <LogoLink />
      </div>
      <Offcanvas
        className="off-canvas-menu h-100"
        responsive="lg"
        show={show}
        onHide={handleClose}
      >
        <OffcanvasHeader />
        <OffcanvasBody
          navlinks={navlinks}
          geforce={geforce}
          ubisoft={ubisoft}
        />
      </Offcanvas>
    </header>
  );
};

export default Header;
