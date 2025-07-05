import { useField } from "formik";
import { FormControl } from "react-bootstrap";
import "./style.scss";

const TextInput = ({ type, placeholder, name }) => {
  const [field, meta] = useField(name);

  const hasError = meta.touched && meta.error;

  return (
    <>
      <FormControl
        {...field}
        type={type}
        placeholder={placeholder}
        aria-label={`${name}-input-area`}
        name={name}
        className={`form-control fw-bold text-white ${
          hasError ? "is-invalid" : ""
        }`}
      />
      {hasError && <div className="invalid-feedback">{meta.error}</div>}
    </>
  );
};

export default TextInput;
