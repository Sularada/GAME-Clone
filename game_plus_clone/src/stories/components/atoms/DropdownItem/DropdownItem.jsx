import Link from "next/link";
import { Dropdown } from "react-bootstrap";
import "./style.scss";
const DropdownItem = ({ item }) => {
  return (
    <Dropdown.Item className="dr-item  p-0">
      <Link
        className="text-decoration-none text-secondary fw-semibold"
        href={item.link}
      >
        {item.text}
      </Link>
    </Dropdown.Item>
  );
};

export default DropdownItem;
