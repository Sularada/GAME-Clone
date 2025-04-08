import { Nav, Offcanvas } from "react-bootstrap";
import NavLink from "../NavLink/NavLink";
import DropdownSubMenu from "../../organisms/DropdownSubMenu/DropdownSubMenu";
import GeForceNowSvg from "../../atoms/Svg/GeForceNowSvg";
import UbisoftSvg from "../../atoms/Svg/UbisoftSvg";

const OffcanvasBody = ({ navlinks, geforce, ubisoft }) => {
  return (
    <Offcanvas.Body className="ps-53">
      <Nav className="d-flex flex-column gap-35 mb-35">
        {navlinks.map((navlink) => {
          return <NavLink key={navlink.id} navlink={navlink} />;
        })}
      </Nav>
      <DropdownSubMenu menu={geforce} svg={<GeForceNowSvg />} />
      <DropdownSubMenu menu={ubisoft} svg={<UbisoftSvg />} />
    </Offcanvas.Body>
  );
};

export default OffcanvasBody;
