import "./style.scss";
import { Nav, Offcanvas } from "react-bootstrap";
import DropdownSubMenu from "../../organisms/DropdownSubMenu/DropdownSubMenu";
import GeForceNowSvg from "../../atoms/Svg/GeForceNowSvg";
import UbisoftSvg from "../../atoms/Svg/UbisoftSvg";

import Link from "../../atoms/Link/Link";

const OffcanvasBody = ({ navlinks, geforce, ubisoft }) => {
  return (
    <Offcanvas.Body className="canvas-body  ps-53 align-items-start align-items-lg-center d-flex flex-column h-100">
      <Nav className="canvas-nav d-flex flex-column gap-35 ">
        {navlinks.map((navlink) => {
          return (
            <Link
              key={navlink.id}
              href={navlink.href}
              text={navlink.text}
              classes="navbar-link"
              leftIcon={navlink.src}
              iconHeight={navlink.height}
              iconWidth={navlink.width}
            />
          );
        })}
      </Nav>
      <div className="sub-menus">
        <Link
          classes="icon-link d-none d-lg-block mb-3"
          href="/"
          iconHeight={78}
          iconWidth={154}
          leftIcon="/images/geforcenow_menu.webp"
        />
        <Link
          classes="icon-link d-none d-lg-block mb-3"
          href="https://gameplus.com.tr/ubisoft"
          iconHeight={78}
          iconWidth={154}
          leftIcon="/images/ubisoft-menu.webp"
        />
        <DropdownSubMenu
          classes="d-lg-none"
          menu={geforce}
          svg={<GeForceNowSvg />}
        />
        <DropdownSubMenu
          classes="d-lg-none"
          menu={ubisoft}
          svg={<UbisoftSvg />}
        />
      </div>
      <div className="mt-auto">
        <Link
          href={"/giris"}
          text="Giriş Yap"
          classes="d-lg-none text-secondary"
        />
        <div className="socials d-flex justify-content-center">
          <Link
            classes="navbar-link"
            href="https://www.facebook.com/gfnbygameplus"
            leftIcon="/images/facebook.svg"
          />
          <Link
            classes="navbar-link"
            href="https://www.instagram.com/gfnbygameplus"
            leftIcon="/images/instagram.svg"
          />
          <Link
            classes="navbar-link"
            href="https://x.com/GFNbyGAMEPLUS"
            leftIcon="/images/x.svg"
          />
          <Link
            classes="navbar-link"
            href="https://www.youtube.com/channel/UCg_Ahh7orrjFKcQ2hUBI8Eg"
            leftIcon="/images/youtube.svg"
          />
        </div>
      </div>
    </Offcanvas.Body>
  );
};

export default OffcanvasBody;
