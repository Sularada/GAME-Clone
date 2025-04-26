import "./style.scss";
import { Dropdown } from "react-bootstrap";
import DropdownItem from "../../atoms/DropdownItem/DropdownItem";

const DropdownMenu = ({ menuItems }) => {
  return (
    <Dropdown.Menu className="dropdown position-relative">
      {menuItems.map((item) => {
        return <DropdownItem key={item.id} item={item} />;
      })}
    </Dropdown.Menu>
  );
};

export default DropdownMenu;
