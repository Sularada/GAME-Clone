import { Col, Row } from "react-bootstrap";
import H2 from "../../atoms/H2/H2";
import P from "../../atoms/P/P";

const DownloadTitle = () => {
  return (
    <div className="mb-5">
      <Row className="justify-content-center">
        <Col sm={1} md={8} lg={6}>
          <H2
            text="GeForce NOW'ı şimdi deneyin"
            classes="text-center text-primary line"
          />
          <P
            text="Cihazınla uyumlu uygulamayı hemen indir ve istediğin cihazda oynamaya başla."
            classes="text-center text-white fs-5"
          />
        </Col>
      </Row>
    </div>
  );
};

export default DownloadTitle;
