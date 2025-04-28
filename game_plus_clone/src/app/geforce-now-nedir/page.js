import {
  getnavbarSection,
  getNestedSection,
} from "../../../firebase/dbController";
import GeforceNowTemplate from "@/stories/components/templates/GeforceNowTemplate/GeforceNowTemplate";

export default async function Home() {
  const navlinks = await getnavbarSection("navlinks");
  const geforce = await getnavbarSection("GeForceNow");
  const ubisoft = await getnavbarSection("ubisoft");

  return (
    <GeforceNowTemplate
      navlinks={navlinks}
      geforce={geforce}
      ubisoft={ubisoft}
    />
  );
}
