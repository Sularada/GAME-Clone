import "./style.scss";
import H3 from "../../atoms/H3/H3";
import NextImage from "../../atoms/Img/NextImage";
import P from "../../atoms/P/P";

const TechCard = ({ title, texts, classes }) => {
  return (
    <div
      className={"text-card px-5 py-4 d-flex flex-column  bg-dark " + classes}
    >
      <div className="head d-flex gap-2 align-items-center mb-2">
        <NextImage
          src={"/images/white_star.svg"}
          width={24}
          height={24}
          alt={"white star"}
        />
        <H3
          text={title}
          classes={"text-primary text-center fw-normal m-0 p-0 fs-5"}
        />
      </div>
      <div className="texts">
        {texts.map((text) => {
          return <P text={text} classes={"text-light"} />;
        })}
      </div>
    </div>
  );
};

export default TechCard;
