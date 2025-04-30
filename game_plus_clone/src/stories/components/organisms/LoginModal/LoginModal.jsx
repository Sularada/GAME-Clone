"use client";
import "./style.scss";
import { useRouter } from "next/navigation";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import NextImage from "../../atoms/Img/NextImage";
import H2 from "../../atoms/H2/H2";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { LinkButton } from "../../atoms/Button/Button";
import LoginForm from "../../molecules/LoginForm/LoginForm";
import { loginFirebase } from "../../../../../firebase/auth";
import { Toast } from "react-bootstrap";
import { useState } from "react";

const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .email("E-posta geçersizdir.")
    .required("E-posta alanı zorunludur."),
  password: Yup.string()
    .min(6, "Şifre alanı en az 6 karakter olmalıdır.")
    .required("Şifre alanı zorunludur."),
});

const LoginModal = () => {
  const router = useRouter();
  const [showToast, setShowToast] = useState(false);
  const handleToast = () => {
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };

  return (
    <Modal show={true} className="login-modal w-100 h-100 bg-dark ">
      <Modal.Header className="justify-content-between bg-black border-0 pt-3 pb-5 w-100">
        <NextImage
          src="/images/game_plus.svg"
          width="106"
          height="24"
          alt="game plus logo image"
        />
        <NextImage
          src="/images/close_icon.svg"
          width="24"
          height="24"
          alt="close icon"
          onClick={() => {
            router.push("/");
          }}
        />
      </Modal.Header>

      <Modal.Body className="bg-dark">
        <H2
          text={"Giriş Yap"}
          classes={"text-warning text-center line-warning"}
        />
        <Toast
          onClose={() => setShowToast(false)}
          show={showToast}
          delay={3000}
          autohide
          bg="danger"
          className="mx-auto"
        >
          <Toast.Body className="text-white">
            Email veya şifre hatalı lütfen kontrol ediniz!
          </Toast.Body>
        </Toast>
        <div className="login-card mx-auto">
          <Formik
            initialValues={{
              email: "",
              password: "",
            }}
            validationSchema={LoginSchema}
            onSubmit={async (values) => {
              const isSuccess = await loginFirebase(
                values.email,
                values.password
              );
              console.log(isSuccess);
              isSuccess ? router.push("/") : handleToast();
            }}
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
          <LinkButton
            href={"/game-kayit"}
            classes={
              "text-decoration-underline text-warning text-center fw-normal mx-auto d-block pb-0 pt-3"
            }
            text={"Üye Ol!"}
          />

          <div className="border-opacity-25 border-top border-light pt-4 mt-4">
            <Button variant="outline-warning" className="w-100">
              Hızlı Giriş ile Giriş Yap
            </Button>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default LoginModal;
