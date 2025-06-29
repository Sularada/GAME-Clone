import Link from "./Link";

const meta = {
  component: Link,
  tags: ["autodocs"],
};

export default meta;

export const Default = {
  args: {
    href: "#",
    text: "link",
  },
};

export const iconLink = {
  args: {
    href: "#",
    text: "Home",
    leftIcon: "/images/home.svg",
    classes: "navbar-link",
  },
};

export const icon = {
  args: {
    href: "https://gameplus.com.tr/ubisoft",
    leftIcon: "https://gameplus.com.tr/static/media/ubisoft-menu.87ddf828.webp",
    iconWidth: 154,
    iconHeight: 78,
    classes: "icon-link",
  },
};
