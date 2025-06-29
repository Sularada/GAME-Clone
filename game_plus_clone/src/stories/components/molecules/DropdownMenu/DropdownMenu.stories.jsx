import DropdownMenu from "./DropdownMenu";

const meta = {
  component: DropdownMenu,
  tags: ["autodocs"],
};

export default meta;

export const Default = {
  args: {
    menuItems: [
      { id: 1, text: "Item 1", link: "#" },
      { id: 2, text: "Item 2", link: "#" },
      { id: 3, text: "Item 3", link: "#" },
    ],
  },
};
