"use client";
import "./style.scss";
import Modal from "react-bootstrap/Modal";
import NextImage from "../../atoms/Img/NextImage";
import * as Yup from "yup";
import RegisterForm from "../../molecules/RegisterForm/RegisterForm";
import H2 from "../../atoms/H2/H2";
import { Form, Formik } from "formik";
import { LinkButton } from "../../atoms/Button/Button";
import { redirect } from "next/navigation";
import { registerFirebase } from "../../../../../firebase/auth";
const RegisterSchema = Yup.object().shape({
  name: Yup.string()
    .min(1, "Ad geçerli uzunlukta değildir.")
    .required("Ad zorunlu alandır"),
  surname: Yup.string()
    .min(1, "Soyad geçerli uzunlukta değildir.")
    .required("Soyad zorunlu alandır"),
  username: Yup.string()
    .min(1, "Kullanıcı adı geçerli uzunlukta değildir.")
    .required("Kullanıcı adı zorunlu alandır"),
  phone: Yup.number().required("Telefon numarası zorunlu alandır"),
  email: Yup.string()
    .email("E-posta geçersizdir.")
    .required("E-posta alanı zorunludur."),
  date: Yup.date().required("Doğum tarihi alanı zorunludur."),
  password: Yup.string()
    .min(2, "Şifre alanı en az 6 karakter olmalıdır.")
    .required("Şifre alanı zorunludur."),
  user: Yup.bool().required("Kullanıcı sözleşmesini onaylamak zorunludur."),
});
const RegisterModal = () => {
  return (
    <Modal show={true} className="register-modal w-100 h-100 bg-dark ">
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
          alt="game plus logo image"
          onClick={() => {
            redirect("/");
          }}
        />
      </Modal.Header>

      <Modal.Body className="bg-dark">
        <H2
          text={"Kayıt Ol"}
          classes={"text-warning text-center line-warning"}
        />

        <div className="register-card  mx-auto">
          <Formik
            initialValues={{
              name: "",
              surname: "",
              username: "",
              phone: +90,
              email: "",
              date: null,
              password: "",
              user: false,
            }}
            validationSchema={RegisterSchema}
            onSubmit={async (values) => {
              registerFirebase(values);
              redirect("/");
            }}
          >
            {({ errors, touched, isSubmitting, validateForm }) => (
              <Form noValidate>
                <RegisterForm
                  errors={errors}
                  touched={touched}
                  isSubmitting={isSubmitting}
                />
              </Form>
            )}
          </Formik>
          <LinkButton
            href={"/game-kayıt"}
            classes={
              "text-decoration-underline text-warning text-center fw-normal mx-auto d-block pb-0 pt-3"
            }
            text={"Giriş Yap"}
          />
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default RegisterModal;
