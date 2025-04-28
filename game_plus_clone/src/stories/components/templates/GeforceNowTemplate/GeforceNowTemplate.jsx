import GeforceIframe from "../../molecules/GeforceIframe/GeforceIframe";
import GeforceHowWork from "../../organisms/GeforceHowWork/GeforceHowWork";
import GeforceLibSection from "../../organisms/LibrarySection/GeforceLibSection";
import TechSection from "../../organisms/TechSection/TechSection";
import WhatGeforce from "../../organisms/WhatGeforce/WhatGeforce";

const GeforceNowTemplate = () => {
  return (
    <main className="position-absolute ms-0 ms-lg-5">
      <WhatGeforce />
      <GeforceIframe />
      <GeforceHowWork />
      <GeforceLibSection />
      <TechSection />
    </main>
  );
};

export default GeforceNowTemplate;
