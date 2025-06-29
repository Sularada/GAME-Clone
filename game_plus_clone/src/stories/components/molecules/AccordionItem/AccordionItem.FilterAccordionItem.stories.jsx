import { Accordion } from "react-bootstrap";
import { FilterAccordionItem } from "./AccordionItem";

const meta = {
  component: FilterAccordionItem,
  tags: ["autodocs"],
};

export default meta;

export const Default = {
  render: (args) => (
    <Accordion defaultActiveKey={args.eventKey}>
      <FilterAccordionItem {...args} />
    </Accordion>
  ),
  args: {
    eventKey: "1",
    title: "Filter Accordion Item",
    type: "checkbox",
    items: [
      { label: "Stream", value: "stream" },
      { label: "Epic Games", value: "epic-games" },
    ],
  },
};
