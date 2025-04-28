import "./style.scss";
import { Col, Row } from "react-bootstrap";
import H2 from "../../atoms/H2/H2";
import P from "../../atoms/P/P";
import { LinkButton } from "../../atoms/Button/Button";

const GeforceLibSection = () => {
  return (
    <section className="geforce-lib-section py-4">
      <div className=" w-100 d-flex justify-content-center">
        <Row className="justify-content-center w-100">
          <Col md={8} lg={6} className="text-center">
            <H2
              text="GeForce NOW ile oynamaya başla! "
              classes={"text-white text-center pb-0"}
            />
            <P
              text="Hangi oyunlara erişimin olacağını öğrenmek için oyun kütüphanesine göz at."
              classes="fs-5 text-white text-center"
            />
            <LinkButton
              href="/oyunlar"
              classes="btn-primary "
              text="Kütüphaneye git"
            />
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default GeforceLibSection;
