import { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import Form from "react-bootstrap/Form";
import FormError from "../common/FormError";
import { BASE_URL } from "../../constants/api";
import AuthContext from "../../context/AuthContext";

const schema = yup.object().shape({
  identifier: yup.string().required("Please enter your username/email address"),
  password: yup.string().required("Please enter your password"),
});

export default function LoginForm() {
  const [submitting, setSubmitting] = useState(false);
  const [loginError, setLoginError] = useState(null);

  const url = BASE_URL + "auth/local";
  const history = useHistory();

  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
  });

  const [, setAuth] = useContext(AuthContext);

  async function onSubmit(data) {
    setSubmitting(true);
    setLoginError(null);

    console.log(data);

    try {
      const response = await axios.post(url, data);
      console.log("response", response.data);
      setAuth(response.data);
      history.push("/admin");
    } catch (error) {
      console.log("error", error);
      setLoginError(error);
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <>
      <Form className="login__content__form" onSubmit={handleSubmit(onSubmit)}>
        <fieldset disabled={submitting}>
          <Form.Group>
            <Form.Label>Username/email address</Form.Label>
            <Form.Control
              name="identifier"
              placeholder="Username/email address..."
              ref={register}
            />
            {errors.identifier && (
              <FormError>{errors.identifier.message}</FormError>
            )}
          </Form.Group>
          <Form.Group>
            <Form.Label>Password</Form.Label>
            <Form.Control
              name="password"
              placeholder="Password"
              ref={register}
              type="password"
            />
            {errors.password && (
              <FormError>{errors.password.message}</FormError>
            )}
          </Form.Group>
          {loginError && (
            <FormError>Invalid login values. Please try again!</FormError>
          )}
          <button className="login__content__form__btn">
            {submitting ? "Logging in..." : "Login"}
          </button>
        </fieldset>
      </Form>
    </>
  );
}
