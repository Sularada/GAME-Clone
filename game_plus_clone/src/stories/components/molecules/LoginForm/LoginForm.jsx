"use client";
import { Button, FloatingLabel, FormCheck } from "react-bootstrap";
import P from "../../atoms/P/P";
import { Field } from "formik";

const LoginForm = ({ errors, touched, isSubmitting }) => {
  return (
    <>
      <FloatingLabel
        controlId="emailInput"
        label="Email"
        className="mb-3 text-light"
      >
        <Field
          type="email"
          name="email"
          className="form-control bg-dark text-light"
        />
        {errors.email && touched.email ? (
          <div className="text-danger">{errors.email}</div>
        ) : null}
      </FloatingLabel>
      <FloatingLabel
        controlId="passwordInput"
        label="Şifre"
        className="text-light"
      >
        <Field
          type="password"
          name="password"
          className="form-control bg-dark text-light"
        />
        {errors.password && touched.password ? (
          <div className="text-danger">{errors.password}</div>
        ) : null}
      </FloatingLabel>
      <div className="mt-3 d-flex justify-content-between">
        <FormCheck
          type="checkbox"
          id="rememberInput"
          label="Beni Hatırla"
          className="text-light "
          defaultChecked={true}
        />
        <P text={"Şifremi Unuttum"} classes={"text-warning"} />
      </div>
      <Button
        type="submit"
        variant="secondary"
        className="w-100"
        disabled={isSubmitting}
      >
        Giriş Yap
      </Button>
    </>
  );
};

export default LoginForm;
