import { Dropdown } from "react-bootstrap";
import DropdownToggleButton from "../../atoms/Button/DropdownToggleButton";
import DropdownMenu from "../../molecules/DropdownMenu/DropdownMenu";

const DropdownSubMenu = ({ menu, svg }) => {
  return (
    <Dropdown className="dropdown-sub-menu">
      <DropdownToggleButton id={menu.id} svg={svg} />
      <DropdownMenu menuItems={menu} />
    </Dropdown>
  );
};

export default DropdownSubMenu;
