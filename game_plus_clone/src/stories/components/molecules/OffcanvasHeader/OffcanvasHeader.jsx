import { Offcanvas } from "react-bootstrap";
import Link from "../../atoms/Link/Link";

const OffcanvasHeader = () => {
  return (
    <Offcanvas.Header closeButton className="ps-53">
      <Offcanvas.Title>
        <Link
          href="/"
          leftIcon="/images/game_plus.svg"
          iconHeight={24}
          iconWidth={106}
        />
      </Offcanvas.Title>
    </Offcanvas.Header>
  );
};

export default OffcanvasHeader;
