import { Formik } from "formik";
import TextInput from "./TextInput";
import { Form } from "react-bootstrap";

const meta = {
  component: TextInput,
};

export default meta;

export const Default = {
  render: (args) => (
    <Formik initialValues={{ email: "" }} onSubmit={() => {}}>
      <Form>
        <TextInput {...args} />
      </Form>
    </Formik>
  ),
  args: {
    name: "email",
    type: "email",
    placeholder: "E-posta",
  },
};
