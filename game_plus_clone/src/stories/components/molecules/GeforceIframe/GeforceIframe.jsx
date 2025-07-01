"use client";
import { useState } from "react";
import CustomButton from "../../atoms/Button/CustomButton";
import "./style.scss";
const GeforceIframe = () => {
  const [show, setShow] = useState(false);

  return (
    <div className="iframe-container d-flex justify-content-center align-items-center my-5">
      <CustomButton
        classes={"text-white rounded-circle " + (show ? "d-none" : "")}
        icon="bi bi-play-fill"
        onClick={() => setShow(true)}
      />
      {show && (
        <iframe
          width="800"
          height="400"
          src="https://www.youtube.com/embed/5pmI0MyI7NQ?si=eo4wS6JGupZQyzHh&amp;autoplay=1&start=5"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      )}
    </div>
  );
};

export default GeforceIframe;
