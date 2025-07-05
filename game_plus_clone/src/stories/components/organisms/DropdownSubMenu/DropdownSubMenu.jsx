import "./style.scss";
import { Dropdown } from "react-bootstrap";
import DropdownToggleButton from "../../atoms/Button/DropdownToggleButton";
import DropdownMenu from "../../molecules/DropdownMenu/DropdownMenu";

const DropdownSubMenu = ({ menu, svg, classes = "" }) => {
  return (
    <Dropdown className={"dropdown-sub-menu " + classes}>
      <DropdownToggleButton id={menu.id} svg={svg} />
      <DropdownMenu menuItems={menu} />
    </Dropdown>
  );
};

export default DropdownSubMenu;
