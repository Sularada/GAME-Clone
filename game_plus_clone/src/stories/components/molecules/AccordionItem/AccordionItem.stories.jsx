import { Accordion } from "react-bootstrap";
import { AccordionItemComp } from "./AccordionItem";
const meta = {
  component: AccordionItemComp,
  tags: ["autodocs"],
};

export default meta;

export const Default = {
  render: (args) => (
    <Accordion defaultActiveKey={args.eventKey}>
      <AccordionItemComp {...args} />
    </Accordion>
  ),
  args: {
    eventKey: "1",
    title: "Accordion Item",
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
    ],
  },
};
