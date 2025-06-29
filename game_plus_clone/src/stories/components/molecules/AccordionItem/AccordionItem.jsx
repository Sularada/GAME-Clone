import "./style.scss";
import {
  AccordionBody,
  AccordionHeader,
  AccordionItem,
  Col,
  Form,
  Row,
} from "react-bootstrap";
import Link from "../../atoms/Link/Link";
import H3 from "../../atoms/H3/H3";
import H4 from "../../atoms/H4/H4";

export const AccordionItemComp = ({ eventKey, title, links }) => {
  return (
    <AccordionItem eventKey={eventKey} className="bg-black">
      <AccordionHeader className="bg-black">{title}</AccordionHeader>
      <AccordionBody>
        <Row>
          {links.map((link) => {
            return (
              link && (
                <Col key={link.id} lg={6}>
                  <Link
                    href={link.href}
                    text={link.text}
                    leftIcon={link.src}
                    iconHeight={link.height}
                    iconWidth={link.width}
                    classes="fw-bold btn btn-outline-primary text-white fs-4 fw-bold w-100 text-start my-3 d-flex gap-4 align-items-center"
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
export const FilterAccordionItem = ({ eventKey, title, type, items }) => {
  return (
    <AccordionItem eventKey={eventKey} className="bg-black m-0">
      <AccordionHeader className="bg-black text-light">
        <H3 classes={"text-secondary fw-medium fs-5 mb-3"} text={title} />
      </AccordionHeader>
      <AccordionBody>
        {items.map((item) => {
          return (
            <div className="d-flex gap-4">
              <Form.Check
                className="checkbox"
                inline
                type={type}
                id={`check-api-${type}`}
              >
                <Form.Check.Input
                  className="text-secondary  "
                  type={type}
                  value={item.value}
                />
                <Form.Check.Label className="text-light fw-medium">
                  {item.label}
                </Form.Check.Label>
              </Form.Check>
              {/* <Form.Check
                className="text-light fw-medium"
                inline
                label={item.label}
                value={item.value}
                type={type}
                id={`inline-${type}-1`}
              /> */}
            </div>
          );
        })}
      </AccordionBody>
    </AccordionItem>
  );
};
export default AccordionItemComp;
