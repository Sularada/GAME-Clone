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
export const FilterAccordionItem = ({ eventKey, title }) => {
  return (
    <AccordionItem eventKey={eventKey} className="bg-black">
      <AccordionHeader className="bg-black">{title}</AccordionHeader>
      <AccordionBody>
        <div className="d-flex">
          <Form.Check
            inline
            label="1"
            name="group1"
            type={type}
            id={`inline-${type}-1`}
          />
        </div>
      </AccordionBody>
    </AccordionItem>
  );
};
export default AccordionItemComp;
