import Link from "next/link";
import NextImage from "../Img/NextImage";

export const LinkButton = ({ href, classes, text }) => {
  return (
    <Link href={href} className={"link-btn fw-bold btn " + classes}>
      {text}
    </Link>
  );
};

export function LinkButtonWithImg({ link, classes }) {
  return (
    <Link href={link.href} className={" fw-bold btn " + classes}>
      <NextImage
        src={link.src}
        width={link.width}
        height={link.height}
        alt={link.alt}
      />
      {link.text}
    </Link>
  );
}
