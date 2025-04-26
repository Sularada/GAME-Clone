import "./style.scss";
import Slider from "../../organisms/Slider/Slider";
import Header from "../../organisms/Header/Header";
import Gift from "../../molecules/Gift/Gift";
import DownloadAndPlay from "../../molecules/DownloadAndPlay/DownloadAndPlay";
import InfoContainer from "../../organisms/InfoContainer/InfoContainer";

const GfnTemplate = ({
  navlinks,
  geforce,
  ubisoft,
  banner,
  gift,
  dAndp,
  info,
}) => {
  return (
    <div className="mx-3 px-1 position-relative ">
      <Header navlinks={navlinks} geforce={geforce} ubisoft={ubisoft} />
      <main className="position-absolute ms-4">
        <Slider slides={banner}></Slider>
        <Gift data={gift} />
        <DownloadAndPlay data={dAndp} />
        <InfoContainer data={info} />
      </main>
    </div>
  );
};

export default GfnTemplate;
