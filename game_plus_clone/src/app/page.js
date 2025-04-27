import {
  getBannerSection,
  getnavbarSection,
  getNestedSection,
  getSection,
} from "../../firebase/dbController";
import GfnTemplate from "@/stories/components/templates/GfnTemplate/GfnTemplate";
export default async function Home() {
  const navlinks = await getnavbarSection("navlinks");
  const geforce = await getnavbarSection("GeForceNow");
  const ubisoft = await getnavbarSection("ubisoft");
  const banner = await getBannerSection();
  const gift = await getSection("giftSection");
  const dAndp = await getSection("downloadPlaySection");
  const info = await getNestedSection("infoSection", [
    "system",
    "faq",
    "service",
  ]);
  const geForceSection = await getSection("geForceNowSection");
  const gameCatalog = await getSection("gameCatalog");
  return (
    <GfnTemplate
      navlinks={navlinks}
      geforce={geforce}
      ubisoft={ubisoft}
      banner={banner}
      gift={gift}
      dAndp={dAndp}
      info={info}
      geForceSection={geForceSection}
      gameCatalog={gameCatalog}
    />
  );
}
