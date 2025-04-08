import { Offcanvas } from "react-bootstrap";
import LogoLink from "../LogoLink/LogoLink";

const OffcanvasHeader = () => {
  return (
    <Offcanvas.Header closeButton className="ps-53">
      <Offcanvas.Title>
        <LogoLink />
      </Offcanvas.Title>
    </Offcanvas.Header>
  );
};

export default OffcanvasHeader;
