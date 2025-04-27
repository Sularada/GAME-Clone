import { Col, Row } from "react-bootstrap";
import "./style.scss";

import { LinkButton } from "../../atoms/Button/Button";
import H2 from "../../atoms/H2/H2";
import P from "../../atoms/P/P";

const GameCatalog = ({ data }) => {
  return (
    <section>
      <div className="catalog w-100 d-flex justify-content-center">
        <Row className="catalog-container justify-content-center w-100">
          <Col md={10}>
            <H2 text={data.title} classes={"text-primary text-center line"} />
            <P text={data.text} classes="fs-5 text-white text-center" />
          </Col>
          <Col>
            <div className="image-slider">
              <div className="slider-1"></div>
              <div className="slider-2"></div>
              <div className="slider-3"></div>
            </div>
          </Col>
          <Col className="text-center">
            <LinkButton
              href={data.btn_link}
              classes="btn-outline-primary text-center "
              text={data.btn_text}
            />
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default GameCatalog;
