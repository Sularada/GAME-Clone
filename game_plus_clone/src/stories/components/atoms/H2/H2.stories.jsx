import H from "./H2";

const meta = {
  component: H,
  tags: ["autodocs"],
};

export default meta;

export const Default = {
  args: {
    text: "H2",
    classes: "text-white",
  },
};

export const WithLine = {
  args: {
    text: "H2",
    classes: "text-center text-primary line ",
  },
};
