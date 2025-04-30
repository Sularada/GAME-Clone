import "./style.scss";
import Slider from "../../organisms/Slider/Slider";
import Gift from "../../molecules/Gift/Gift";
import DownloadAndPlay from "../../molecules/DownloadAndPlay/DownloadAndPlay";
import InfoContainer from "../../organisms/InfoContainer/InfoContainer";
import GeForceSection from "../../organisms/GeForceSection/GeForceSection";
import GameCatalog from "../../organisms/GameCatalog/GameCatalog";
import BuySection from "../../organisms/BuySection/BuySection";
import Footer from "../../organisms/Footer/Footer";
import PackagesSection from "../../organisms/PackagesSection/PackagesSection";

const GfnTemplate = ({
  banner,
  gift,
  dAndp,
  info,
  geForceSection,
  gameCatalog,
}) => {
  return (
    <main className="position-absolute ms-0 ms-lg-5">
      <Slider slides={banner}></Slider>
      <Gift data={gift} line="line" />
      <DownloadAndPlay data={dAndp} />
      <InfoContainer data={info} />
      <GeForceSection data={geForceSection} />
      <GameCatalog data={gameCatalog} />
      <PackagesSection />
      <BuySection />
      <Footer />
    </main>
  );
};

export default GfnTemplate;
