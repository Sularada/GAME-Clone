import "./style.scss";
import { Nav, Offcanvas } from "react-bootstrap";
import DropdownSubMenu from "../../organisms/DropdownSubMenu/DropdownSubMenu";
import GeForceNowSvg from "../../atoms/Svg/GeForceNowSvg";
import UbisoftSvg from "../../atoms/Svg/UbisoftSvg";
import Link from "next/link";
import NextImage from "../../atoms/Img/NextImage";
import NavLink from "../NavLink/NavLink";

const OffcanvasBody = ({ navlinks, geforce, ubisoft }) => {
  return (
    <Offcanvas.Body className="ps-53 d-flex flex-column h-100">
      <Nav className="d-flex flex-column gap-35 mb-35">
        {navlinks.map((navlink) => {
          return <NavLink key={navlink.id} navlink={navlink} />;
        })}
      </Nav>
      <DropdownSubMenu menu={geforce} svg={<GeForceNowSvg />} />
      <DropdownSubMenu menu={ubisoft} svg={<UbisoftSvg />} />
      <div className="mt-auto">
        <NavLink navlink={{ link: "/giris", text: "Giriş Yap" }} />
        <div className="socials d-flex justify-content-center">
          <Link href="https://www.facebook.com/gfnbygameplus">
            <NextImage
              src="/images/facebook.svg"
              width="24"
              height="24"
              alt="facebook image"
            />
          </Link>
          <Link href="https://www.instagram.com/gfnbygameplus">
            <NextImage
              src="/images/instagram.svg"
              width="24"
              height="24"
              alt="instagram image"
            />
          </Link>
          <Link href="https://x.com/GFNbyGAMEPLUS">
            <NextImage
              src="/images/x.svg"
              width="14"
              height="19"
              alt="x image"
            />
          </Link>
          <Link href="https://www.youtube.com/channel/UCg_Ahh7orrjFKcQ2hUBI8Eg">
            <NextImage
              src="/images/youtube.svg"
              width="24"
              height="24"
              alt="youtube image"
            />
          </Link>
        </div>
      </div>
    </Offcanvas.Body>
  );
};

export default OffcanvasBody;
