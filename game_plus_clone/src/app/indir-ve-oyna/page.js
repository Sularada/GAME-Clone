import DownloadAndPlayTemplate from "@/stories/components/templates/DownloadAndPlayTemplate/DownloadAndPlayTemplate";
import {
  getnavbarSection,
  getNestedSection,
} from "../../../firebase/dbController";

export default async function Home() {
  const navlinks = await getnavbarSection("navlinks");
  const geforce = await getnavbarSection("GeForceNow");
  const ubisoft = await getnavbarSection("ubisoft");
  const downloadOptions = [
    {
      title: "Masaüstüne İndir",
      links: [
        {
          id: "for-windows",
          href: "https://download.nvidia.com/gfnpc/GeForceNOW-release.exe",
          src: "https://gameplus.com.tr/assets/images/platforms/windows.png",
          width: 80,
          height: 80,
          alt: "Windows için indir",
          text: "Windows için indir",
        },
        {
          id: "for-macos",
          href: "https://download.nvidia.com/gfnpc/GeForceNOW-release.dmg",
          src: "https://gameplus.com.tr/assets/images/platforms/apple.png",
          width: 80,
          height: 80,
          alt: "MacOs için indir",
          text: "MacOs için indir",
        },
      ],
    },
    {
      title: "Tarayıcıdan Oyna",
      links: [
        {
          id: "for-chrome",
          href: "https://play.geforcenow.com/",
          src: "https://gameplus.com.tr/assets/images//platforms/chrome.png",
          width: 80,
          height: 80,
          alt: "Chrome'dan oyna",
          text: "Chrome'dan oyna",
        },
        {
          id: "for-safari",
          href: "https://play.geforcenow.com/",
          src: "https://gameplus.com.tr/assets/images//platforms/safari.png",
          width: 80,
          height: 80,
          alt: "Safari'den oyna",
          text: "Safari'den oyna",
        },
      ],
    },
    {
      title: "Mobil Cihazdan Oyna",
      links: [
        {
          id: "for-android",
          href: "https://play.google.com/store/apps/details?id=com.nvidia.geforcenow&hl=en_US&gl=US",
          src: "https://gameplus.com.tr/assets/images//platforms/android.png",
          width: 80,
          height: 80,
          alt: "Android cihazına indir",
          text: "Android cihazına indir",
        },
        {
          id: "for-ios",
          href: "https://play.geforcenow.com/",
          src: "https://gameplus.com.tr/assets/images//platforms/apple.png",
          width: 80,
          height: 80,
          alt: "IOS cihazın ile oyna",
          text: "IOS cihazın ile oyna",
        },
      ],
    },
    {
      title: "Akıllı TV ve Yayın Cihazlarından Oyna",
      links: [
        {
          id: "for-lg",
          href: "https://us.lgappstv.com/main/tvapp/detail?appId=1116441",
          src: "https://gameplus.com.tr/assets/images//platforms/lg.png",
          width: 80,
          height: 80,
          alt: "LG TV ile oyna",
          text: "LG TV ile oyna",
        },
        {
          id: "for-android-tv",
          href: "https://play.geforcenow.com/",
          src: "https://gameplus.com.tr/assets/images//platforms/android.png",
          width: 80,
          height: 80,
          alt: "Android TV ile oyna",
          text: "Android TV ile oyna",
        },
        {
          id: "for-sony",
          href: "https://play.google.com/store/apps/details?id=com.nvidia.geforcenow&hl=en_US&gl=US",
          src: "	https://gameplus.com.tr/assets/images//platforms/sony.png",
          width: 80,
          height: 80,
          alt: "Sony TV ile oyna",
          text: "Sony TV ile oyna",
        },
        {
          id: "for-samsung",
          href: "https://www.samsung.com/us/appstore/app/G22082019180",
          src: "	https://gameplus.com.tr/assets/images//platforms/samsung.png",
          width: 80,
          height: 80,
          alt: "Samsung TV ile oyna",
          text: "Samsung TV ile oyna",
        },
        {
          id: "for-chrome-cast",
          href: "https://play.geforcenow.com",
          src: "https://gameplus.com.tr/assets/images//platforms/chrome.png",
          width: 80,
          height: 80,
          alt: "Chromecast ile oyna",
          text: "Chromecast ile oyna",
        },
        {
          id: "for-shield",
          href: "https://www.nvidia.com/en-us/shield/",
          src: "https://gameplus.com.tr/assets/images//platforms/shield.png",
          width: 80,
          height: 80,
          alt: "Shield TV ile oyna",
          text: "Shield TV ile oyna",
        },
      ],
    },
  ];
  const info = await getNestedSection("infoSection", [
    "system",
    "faq",
    "service",
  ]);

  return (
    <DownloadAndPlayTemplate
      navlinks={navlinks}
      geforce={geforce}
      ubisoft={ubisoft}
      downloadOptions={downloadOptions}
      info={info}
    />
  );
}
