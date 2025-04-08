import MenuSvg from "../Svg/MenuSvg";

const OffcanvasButton = ({ handleShow }) => {
  return (
    <button className="menu-btn me-3 d-lg-none" onClick={handleShow}>
      <MenuSvg />
    </button>
  );
};

export default OffcanvasButton;
