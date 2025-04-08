import Link from "next/link";
import LogoSvg from "../../atoms/Svg/LogoSvg";

const LogoLink = () => {
  return (
    <Link href="/gfn">
      <LogoSvg />
    </Link>
  );
};

export default LogoLink;
