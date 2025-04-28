import { Col, Row } from "react-bootstrap";
import NextImage from "../../atoms/Img/NextImage";
import H3 from "../../atoms/H3/H3";
import { LinkButton } from "../../atoms/Button/Button";

const SubscribeSection = () => {
  return (
    <section className="my-5">
      <div>
        <Row>
          <Col md={6} lg={8}>
            <NextImage
              src={
                "https://gameplus.com.tr/static/media/register-now.78642ca2.webp"
              }
              width={762}
              height={364}
              alt={"Grforce NOW Gaming"}
              className={"w-100 h-auto"}
            />
          </Col>
          <Col md={6} lg={4} className="d-flex align-items-center">
            <div>
              <H3
                text={"Hemen üye ol, şimdi oynamaya başla!"}
                classes={"text-white fs-2"}
              />
              <LinkButton
                href={"/paketler"}
                text={"Hemen Dene"}
                classes={"btn-primary"}
              />
            </div>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default SubscribeSection;
