import { LinkButton } from "../../atoms/Button/Button";
import H2 from "../../atoms/H2/H2";
import NextImage from "../../atoms/Img/NextImage";
import P from "../../atoms/P/P";
import "./style.scss";
const GeForceSection = ({ data }) => {
  return (
    <section>
      <div className="geForce-container d-flex justify-content-center">
        <div className="w-100 position-relative">
          <NextImage
            src={data.laptop_image}
            width={722}
            height={295}
            alt={"video background laptop image"}
            className="w-100 h-auto"
          />
          <video
            autoPlay
            loop
            playsInline
            className="position-absolute game-video "
          >
            <source src={data.video_src_0} type={data.video_type_0} />
            <source src={data.video_src_1} type={data.video_type_1} />
          </video>
        </div>
        <div className="text-container">
          <div className="gift w-100 text-start">
            <H2 text={data.title} classes={"text-primary "} />
            <P text={data.text} classes="fs-5 text-white" />
            <LinkButton
              href={data.btn_link}
              classes="btn-outline-primary "
              text={data.btn_text}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default GeForceSection;
