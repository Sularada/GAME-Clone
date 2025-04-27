import "./style.scss";
import Slider from "../../organisms/Slider/Slider";
import Header from "../../organisms/Header/Header";
import Gift from "../../molecules/Gift/Gift";
import DownloadAndPlay from "../../molecules/DownloadAndPlay/DownloadAndPlay";
import InfoContainer from "../../organisms/InfoContainer/InfoContainer";
import GeForceSection from "../../organisms/GeForceSection/GeForceSection";
import GameCatalog from "../../organisms/GameCatalog/GameCatalog";
import BuySection from "../../organisms/BuySection/BuySection";
import Footer from "../../organisms/Footer/Footer";

const GfnTemplate = ({
  navlinks,
  geforce,
  ubisoft,
  banner,
  gift,
  dAndp,
  info,
  geForceSection,
  gameCatalog,
}) => {
  return (
    <div className=" position-relative ">
      <Header navlinks={navlinks} geforce={geforce} ubisoft={ubisoft} />
      <main className="position-absolute ms-5">
        <Slider slides={banner}></Slider>
        <Gift data={gift} line="line" />
        <DownloadAndPlay data={dAndp} />
        <InfoContainer data={info} />
        <GeForceSection data={geForceSection} />
        <GameCatalog data={gameCatalog} />
        <BuySection />
        <Footer />
      </main>
    </div>
  );
};

export default GfnTemplate;
