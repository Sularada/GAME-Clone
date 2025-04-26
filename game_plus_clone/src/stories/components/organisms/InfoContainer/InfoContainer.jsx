import "./style.scss";
import { Col, Row } from "react-bootstrap";
import InfoCard from "../../molecules/InfoCard/InfoCard";

const InfoContainer = ({ data }) => {
  return (
    <section className="info-container">
      <Row>
        {data.map((info) => {
          return (
            <Col lg={4} key={info.id} className="my-4 my-lg-0">
              <InfoCard info={info} />
            </Col>
          );
        })}
      </Row>
    </section>
  );
};

export default InfoContainer;
