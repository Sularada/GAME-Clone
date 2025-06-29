import CustomButton from "./CustomButton";

const meta = {
  component: CustomButton,
  tags: ["autodocs"],
};

export default meta;

export const Default = {
  args: {},
};

export const Outline = {
  args: {
    isOutline: true,
  },
};

export const Fill = {
  args: {},
};

export const Icon = {
  args: {
    text: "",
    icon: "bi bi-search",
    style: { width: "48px", minWidth: "auto" },
  },
};
