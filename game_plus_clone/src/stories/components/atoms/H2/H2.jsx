import "./style.scss";
const H2 = ({ classes, text }) => {
  return <h2 className={"fw-bold " + classes}>{text}</h2>;
};

export default H2;
