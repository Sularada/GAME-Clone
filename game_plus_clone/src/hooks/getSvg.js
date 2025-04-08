import GameBlogSvg from "@/stories/components/atoms/Svg/GameBlogSvg";
import HomeSvg from "@/stories/components/atoms/Svg/HomeSvg";
import SaleCampainSvg from "@/stories/components/atoms/Svg/SaleCampainSvg";
import SupportSvg from "@/stories/components/atoms/Svg/SupportSvg";

const getSvg = (svg) => {
  switch (svg) {
    case "home":
      return <HomeSvg />;
    case "gameBlog":
      return <GameBlogSvg />;
    case "campains":
      return <SaleCampainSvg />;
    case "support":
      return <SupportSvg />;
  }
};

export default getSvg;
