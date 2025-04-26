import Link from "next/link";
import getSvg from "@/hooks/getSvg";

const NavLink = ({ navlink }) => {
  return (
    <Link
      className="text-decoration-none text-secondary fw-semibold d-flex align-items-center gap-2"
      href={navlink.link}
    >
      {navlink.id && getSvg(navlink.id)} {navlink.text}
    </Link>
  );
};

export default NavLink;
