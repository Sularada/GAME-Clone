import React from "react";
import { Button } from "react-bootstrap";
import "./style.scss";

const CustomButton = ({
  text = "Button",
  classes = "",
  icon = "",
  isOutline = false,
  variant = "primary",
  ...probs
}) => {
  return (
    <Button
      className={"btn custom-btn" + classes}
      variant={isOutline ? "outline-" : "" + variant}
      {...probs}
    >
      {text}
      {icon && <i className={icon}></i>}
    </Button>
  );
};

export default CustomButton;
