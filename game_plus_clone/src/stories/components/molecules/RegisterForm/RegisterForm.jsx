"use client";

import { Field } from "formik";
import { Button, FloatingLabel, FormCheck } from "react-bootstrap";
import P from "../../atoms/P/P";

const RegisterForm = ({ errors, touched, isSubmitting }) => {
  return (
    <>
      <FloatingLabel
        controlId="nameInput"
        label="Ad"
        className="mb-3 text-light"
      >
        <Field
          type="text"
          name="name"
          className="form-control bg-dark text-light"
        />
        {errors.name && touched.name ? (
          <div className="text-danger">{errors.name}</div>
        ) : null}
      </FloatingLabel>
      <FloatingLabel
        controlId="surnameInput"
        label="Soyad"
        className="mb-3 text-light"
      >
        <Field
          type="text"
          name="surname"
          className="form-control bg-dark text-light"
        />
        {errors.surname && touched.surname ? (
          <div className="text-danger">{errors.surname}</div>
        ) : null}
      </FloatingLabel>
      <FloatingLabel
        controlId="userNameInput"
        label="Kullanıcı Adı"
        className="mb-3 text-light"
      >
        <Field
          type="text"
          name="username"
          className="form-control bg-dark text-light"
        />
        {errors.username && touched.username ? (
          <div className="text-danger">{errors.username}</div>
        ) : null}
      </FloatingLabel>
      <FloatingLabel
        controlId="phoneInput"
        label="+90"
        className="mb-3 text-light"
      >
        <Field
          type="tel"
          name="phone"
          className="form-control bg-dark text-light"
        />
        {errors.phone && touched.phone ? (
          <div className="text-danger">{errors.phone}</div>
        ) : null}
      </FloatingLabel>
      <FloatingLabel
        controlId="emailInput"
        label="E-posta"
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
        controlId="dateInput"
        label="Doğum Tarihi"
        className="mb-3 text-light"
      >
        <Field
          type="date"
          name="date"
          className="form-control bg-dark text-light"
        />
        {errors.date && touched.date ? (
          <div className="text-danger">{errors.date}</div>
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
      <div className="mt-3 ">
        <P
          classes={
            "text-decoration-underline text-warning  fw-normal d-block  pt-3"
          }
          text={"Şifre Kuralları"}
        />
        <FormCheck
          type="checkbox"
          id="tradeInput"
          name="trade"
          label="Ticari Elektronik İleti ve Veri İzni'ni kabul ediyorum."
          className="text-light "
        />
        <FormCheck
          type="checkbox"
          id="userInput"
          name="user"
          label="Ticari Elektronik İleti ve Veri İzni'ni kabul ediyorum."
          className="text-light "
        />
        {errors.user && touched.user ? (
          <div className="text-danger">{errors.user}</div>
        ) : null}
      </div>
      <Button
        type="submit"
        variant="secondary"
        className="w-100"
        disabled={isSubmitting}
      >
        Kaydol
      </Button>
    </>
  );
};

export default RegisterForm;
