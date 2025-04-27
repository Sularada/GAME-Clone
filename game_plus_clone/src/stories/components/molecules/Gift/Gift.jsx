import "./style.scss";
import { Col, Row } from "react-bootstrap";
import { LinkButton } from "../../atoms/Button/Button";
import H2 from "../../atoms/H2/H2";
import P from "../../atoms/P/P";

const Gift = ({ data, line = "" }) => {
  return (
    <div className="gift w-100 d-flex justify-content-center">
      <Row className="gift-container justify-content-center w-100">
        <Col md={8} lg={6}>
          <H2 text={data.title} classes={"text-primary " + line} />
          <P text={data.text} classes="fs-5 text-white" />
          <LinkButton
            href={data.btn_link}
            classes="btn-outline-primary "
            text={data.btn_text}
          />
        </Col>
      </Row>
    </div>
  );
};

export default Gift;
