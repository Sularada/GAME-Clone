import { Formik } from "formik";
import TextInput from "../../atoms/Input/TextInput";
import FloatingLabelWapper from "./FloatingLabelWapper";
import { Form } from "react-bootstrap";

const meta = {
  component: FloatingLabelWapper,
  tags: ["autodocs"],
};

export default meta;

export const Default = {
  render: (args) => (
    <Formik initialValues={{ name: "" }} onSubmit={() => {}}>
      <Form>
        <FloatingLabelWapper {...args} />
      </Form>
    </Formik>
  ),
  args: {
    label: "Label",
    id: "id",
    children: <TextInput type="text" placeholder="Placeholder" name="name" />,
  },
};
