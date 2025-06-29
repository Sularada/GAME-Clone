import React from "react";
import NextImage from "../Img/NextImage";
import "./style.scss";
const Link = ({
  href,
  text = "",
  leftIcon = "",
  iconHeight = 24,
  iconWidth = 24,
  rightIcon = "",
  classes = "",
}) => {
  return (
    <a
      href={href}
      className={
        "link-item text-decoration-none d-flex align-items-center gap-2 " +
        classes
      }
    >
      {leftIcon && (
        <NextImage
          src={leftIcon}
          width={iconWidth}
          height={iconHeight}
          alt="link left icon"
        />
      )}
      {text}{" "}
      {rightIcon && (
        <NextImage
          src={rightIcon}
          width={24}
          height={24}
          alt="link right icon"
        />
      )}
    </a>
  );
};

export default Link;
