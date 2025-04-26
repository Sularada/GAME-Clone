import "./style.scss";
import { Dropdown } from "react-bootstrap";

const DropdownToggleButton = ({ id, svg }) => {
  return (
    <Dropdown.Toggle
      className="dropdown-toggle-btn w-75 d-flex justify-content-between align-items-center py-3 my-1"
      id={id}
    >
      {svg}
    </Dropdown.Toggle>
  );
};

export default DropdownToggleButton;
