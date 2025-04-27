import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  AccordionItem,
} from "react-bootstrap";
import DownloadTitle from "../../molecules/DownloadTitle/DownloadTitle";
import AccordionContainer from "../../organisms/AccordionContainer/AccordionContainer";
import Header from "../../organisms/Header/Header";
import "./style.scss";

const DownloadAndPlayTemplate = ({
  navlinks,
  geforce,
  ubisoft,
  downloadOptions,
}) => {
  return (
    <div className=" position-relative ">
      <Header navlinks={navlinks} geforce={geforce} ubisoft={ubisoft} />
      <main className="position-absolute ms-5">
        <DownloadTitle />
        <AccordionContainer data={downloadOptions} />
      </main>
    </div>
  );
};

export default DownloadAndPlayTemplate;
