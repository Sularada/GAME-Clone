import "./style.scss";
import {
  AccordionBody,
  AccordionHeader,
  AccordionItem,
  Col,
  Row,
} from "react-bootstrap";
import { LinkButtonWithImg } from "../../atoms/Button/Button";

const AccordionItemComp = ({ eventKey, title, links }) => {
  console.log(title, links);
  return (
    <AccordionItem eventKey={eventKey} className="bg-black">
      <AccordionHeader className="bg-black">{title}</AccordionHeader>
      <AccordionBody>
        <Row>
          {links.map((link) => {
            return (
              link && (
                <Col lg={6}>
                  <LinkButtonWithImg
                    key={link.id}
                    link={link}
                    classes={
                      " btn-outline-primary text-white fs-4 fw-bold w-100 text-start my-3 d-flex gap-4 align-items-center"
                    }
                  />
                </Col>
              )
            );
          })}
        </Row>
      </AccordionBody>
    </AccordionItem>
  );
};

export default AccordionItemComp;
