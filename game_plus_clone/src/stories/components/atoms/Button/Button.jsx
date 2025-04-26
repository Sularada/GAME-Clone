import Link from "next/link";

export const LinkButton = ({ href, classes, text }) => {
  return (
    <Link href={href} className={"link-btn fw-bold btn " + classes}>
      {text}
    </Link>
  );
};
