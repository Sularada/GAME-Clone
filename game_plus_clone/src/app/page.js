import Header from "@/stories/components/organisms/Header/Header";
import "../styles/css/main.css";
import {
  getBannerSection,
  getnavbarSection,
} from "../../firebase/dbController";
import Slider from "@/stories/components/organisms/Slider/Slider";
export default async function Home() {
  const navlinks = await getnavbarSection("navlinks");
  const geforce = await getnavbarSection("GeForceNow");
  const ubisoft = await getnavbarSection("ubisoft");
  const banner = await getBannerSection();

  return (
    <div className="mx-3 px-1">
      <Header navlinks={navlinks} geforce={geforce} ubisoft={ubisoft} />
      <Slider slides={banner}></Slider>
    </div>
  );
}
