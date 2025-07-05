"use client";
import { Button, FloatingLabel, Form, FormCheck } from "react-bootstrap";
import P from "../../atoms/P/P";
import { Field } from "formik";
import FloatingLabelWapper from "../FloatingLabelWrapper/FloatingLabelWapper";
import TextInput from "../../atoms/Input/TextInput";
import "./style.scss";
import Link from "../../atoms/Link/Link";
import CustomButton from "../../atoms/Button/CustomButton";

const LoginForm = ({ errors, touched, isSubmitting }) => {
  return (
    <>
      <div>
        <FloatingLabelWapper
          label="E-posta"
          id="email"
          children={
            <>
              <TextInput type="email" placeholder="E-posta" name="email" />
            </>
          }
        />
      </div>
      <div>
        <FloatingLabelWapper
          label="Şifre"
          id="password"
          children={
            <>
              <TextInput
                type="password"
                placeholder="E-posta"
                name="password"
              />
            </>
          }
        />
      </div>

      <div className=" d-flex justify-content-between align-items-center mb-3">
        <Form.Check
          className="login-checkbox"
          inline
          type="checkbox"
          id="rememberInput"
          variant="warning"
        >
          <Form.Check.Input
            className="text-secondary  "
            type="checkbox"
            defaultChecked={true}
          />
          <Form.Check.Label className="text-light fw-medium">
            Beni Hatırla
          </Form.Check.Label>
        </Form.Check>
        <Link
          href={""}
          text={"Şifremi Unuttum"}
          classes={"forget-password text-warning text-decoration-underline"}
        />
      </div>
      <CustomButton
        type="submit"
        variant="secondary"
        className="w-100 fw-bold login-btn"
        disabled={isSubmitting}
        text="Giriş Yap"
      ></CustomButton>
    </>
  );
};

export default LoginForm;
