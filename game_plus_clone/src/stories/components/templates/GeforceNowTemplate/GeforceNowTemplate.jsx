import GeforceIframe from "../../molecules/GeforceIframe/GeforceIframe";
import Footer from "../../organisms/Footer/Footer";
import GeforceHowWork from "../../organisms/GeforceHowWork/GeforceHowWork";
import InfoTable from "../../organisms/InfoTable/InfoTable";
import GeforceLibSection from "../../organisms/LibrarySection/GeforceLibSection";
import PerformanceSection from "../../organisms/PerformanceSection/PerformanceSection";
import SubscribeSection from "../../organisms/SubscribeSection/SubscribeSection";
import TechSection from "../../organisms/TechSection/TechSection";
import WhatGeforce from "../../organisms/WhatGeforce/WhatGeforce";

const GeforceNowTemplate = () => {
  return (
    <>
      <WhatGeforce />
      <GeforceIframe />
      <GeforceHowWork />
      <GeforceLibSection />
      <TechSection />
      <PerformanceSection />
      <InfoTable />
      <SubscribeSection />
      <Footer />
    </>
  );
};

export default GeforceNowTemplate;
