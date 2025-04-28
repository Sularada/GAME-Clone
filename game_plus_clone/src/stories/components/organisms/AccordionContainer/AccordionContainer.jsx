import Accordion from "react-bootstrap/Accordion";

import AccordionItemComp from "../../molecules/AccordionItem/AccordionItem";

const AccordionContainer = ({ data }) => {
  return (
    <Accordion className="accordion-dark mb-5" defaultActiveKey="0">
      {data.map((item, index) => {
        console.log(item.links);
        return (
          <AccordionItemComp
            key={index + "item"}
            eventKey={index}
            title={item.title}
            links={item.links}
          />
        );
      })}
    </Accordion>
  );
};

export default AccordionContainer;
