"use client";
import "./style.scss";
import { useEffect, useState } from "react";
import OffcanvasButton from "../../atoms/Button/OffcanvasButton";
import LogoLink from "../../molecules/LogoLink/LogoLink";
import { Offcanvas } from "react-bootstrap";
import OffcanvasHeader from "../../molecules/OffcanvasHeader/OffcanvasHeader";
import OffcanvasBody from "../../molecules/OffcanvasBody/OffcanvasBody";
import { auth } from "../../../../../firebase/firebase";

const Header = ({ navlinks, geforce, ubisoft }) => {
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);
  const [userAuth, setUserAuth] = useState();
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        console.log(userAuth, " in");
        setUserAuth(userAuth);
      } else {
        setUserAuth(null);
        console.log(userAuth, " out");
      }
    });

    return () => unsubscribe();
  }, []);
  return (
    <header className="d-flex flex-column position-absolute position-lg-fixed top-0 left-0 px-5 ">
      <div className="canvas-head d-flex py-3 my-1 ">
        <OffcanvasButton className="d-lg-none" handleShow={handleShow} />{" "}
        <LogoLink />
      </div>
      <Offcanvas
        className="off-canvas-menu h-100 bg-dark"
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
