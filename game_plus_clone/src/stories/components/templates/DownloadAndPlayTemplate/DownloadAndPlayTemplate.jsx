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
import InfoContainer from "../../organisms/InfoContainer/InfoContainer";
import LibrarySection from "../../organisms/LibrarySection/LibrarySection";
import Footer from "../../organisms/Footer/Footer";

const DownloadAndPlayTemplate = ({
  navlinks,
  geforce,
  ubisoft,
  downloadOptions,
  info,
}) => {
  return (
    <>
      <DownloadTitle />
      <AccordionContainer data={downloadOptions} />
      <InfoContainer data={info} />
      <LibrarySection />
      <Footer />
    </>
  );
};

export default DownloadAndPlayTemplate;
