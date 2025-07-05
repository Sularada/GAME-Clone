import { FloatingLabel } from "react-bootstrap";
import "./style.scss";
const FloatingLabelWapper = ({ label, id, children }) => {
  return (
    <FloatingLabel
      className="floating-label fw-medium mb-4 "
      controlId={id}
      label={label}
    >
      {children}
    </FloatingLabel>
  );
};

export default FloatingLabelWapper;
