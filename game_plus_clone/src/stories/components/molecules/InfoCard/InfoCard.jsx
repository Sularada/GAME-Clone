import "./style.scss";
import H4 from "../../atoms/H4/H4";
import P from "../../atoms/P/P";
import Link from "../../atoms/Link/Link";

const InfoCard = ({ info }) => {
  return (
    <div className="info-card">
      <i
        className={
          info.top_icon_class + " text-primary top-icon d-block text-center"
        }
      ></i>
      <H4 text={info.title} classes="text-center" />
      <P text={info.text} classes="text-center text-light" />
      <Link
        href={info.link}
        classes="text-primary justify-content-center info-card-link"
        text={info.link_text}
      />
    </div>
  );
};

export default InfoCard;
