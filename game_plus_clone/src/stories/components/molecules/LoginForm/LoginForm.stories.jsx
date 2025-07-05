import * as Yup from "yup";
import LoginForm from "./LoginForm";
import { Form } from "react-bootstrap";
import { Formik } from "formik";

const meta = {
  component: LoginForm,
  tags: ["autodocs"],
};

export default meta;
const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .email("E-posta geçersizdir.")
    .required("E-posta alanı zorunludur."),
  password: Yup.string()
    .min(6, "Şifre alanı en az 6 karakter olmalıdır.")
    .required("Şifre alanı zorunludur."),
});

export const Default = {
  render: () => (
    <div className="login-card mx-auto">
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        validationSchema={LoginSchema}
        onSubmit={() => {}}
      >
        {({ errors, touched, isSubmitting, validateForm }) => (
          <Form noValidate>
            <LoginForm
              errors={errors}
              touched={touched}
              isSubmitting={isSubmitting}
            />
          </Form>
        )}
      </Formik>
    </div>
  ),
};
