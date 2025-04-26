import "./style.scss";
import H2 from "../../atoms/H2/H2";
import NextImage from "../../atoms/Img/NextImage";
import { LinkButton } from "../../atoms/Button/Button";
import { Col, Row } from "react-bootstrap";

const DownloadAndPlay = ({ data }) => {
  return (
    <Row className="d-and-p position-relative w-100">
      <Col md={8} lg={6}>
        <NextImage
          src={data.img}
          width={488}
          height={282}
          alt="background image"
          className="bg-image z-0"
        />
        <H2 text={data.title} classes="text-light" />
        <LinkButton
          href={data.btn_link}
          classes="btn-outline-primary z-2 position-relative"
          text={data.btn_text}
        />
      </Col>
    </Row>
  );
};

export default DownloadAndPlay;
