import "./style.scss";
import Link from "next/link";
import H4 from "../../atoms/H4/H4";
import P from "../../atoms/P/P";

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
        className="text-primary text-center text-decoration-none d-block"
      >
        {info.link_text} <i className={info.link_icon_class}></i>{" "}
      </Link>
    </div>
  );
};

export default InfoCard;
