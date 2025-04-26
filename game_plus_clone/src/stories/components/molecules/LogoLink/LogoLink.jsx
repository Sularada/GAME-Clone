import Link from "next/link";
import NextImage from "../../atoms/Img/NextImage";

const LogoLink = () => {
  return (
    <Link
      href="https://gameplus.com.tr/"
      className={"w-100 d-flex align-items-center"}
    >
      <NextImage
        src="/images/game_plus.svg"
        width="106"
        height="24"
        alt="game plus logo image"
      />
    </Link>
  );
};

export default LogoLink;
