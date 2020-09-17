import React, { useContext, useState } from "react";
import { useForm } from "../../../Shared/hooks/form-hooks";
import { useHttpClient } from "../../../Shared/hooks/http-hook";
import { Link, useHistory } from "react-router-dom";
import Input from "../../../Shared/FormElements/Input";
import {
  VALIDATOR_MINLENGTH,
  VALIDATOR_EMAIL,
} from "../../../../utils/validators";
import { AuthContext } from "../../../Shared/context/AuthContext";
import ErrorModal from "../../../Shared/component/ErrorModal/ErrorModal";

const LoginFormComponent = () => {
  const auth = useContext(AuthContext);
  const [formState, inputHandler] = useForm(
    {
      email: { value: "", isValid: false },
      password: { value: "", isValid: false },
    },
    false
  );

  const [errorModal, setErrorModal] = useState({
    isOpen: true,
    title: "Oops,An Error Ecocountered!!!",
    content: "",
  });
  const history = useHistory();

  const { sendRequest, error, clearError } = useHttpClient();

  const loginSubmitHandler = async (event) => {
    event.preventDefault();
    try {
      const data = await sendRequest(
        process.env.REACT_APP_BACKEND_URL + "/login",
        "POST",
        { "Content-Type": "application/json" },
        JSON.stringify({
          email: formState.inputs.email.value,
          password: formState.inputs.password.value,
        })
      );
      auth.login(data.userId, data.token);
      history.push("/");
    } catch (error) {}
  };
  return (
    <>
      {error && (
        <ErrorModal
          errorModal={{ ...errorModal, content: error }}
          setErrorModal={setErrorModal}
          clearError={clearError}
        />
      )}
      <section className="login_part padding_top">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-6">
              <div className="login_part_text text-center">
                <div className="login_part_text_iner">
                  <h2>New to our Shop?</h2>
                  <p>
                    There are advances being made in science and technology
                    everyday, and a good example of this is the
                  </p>
                  <Link to="/signup" className="btn_3">
                    Create an Account
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <div className="login_part_form">
                <div className="login_part_form_iner">
                  <h3>
                    Welcome Back ! <br />
                    Please Sign in now
                  </h3>
                  <form
                    className="row contact_form"
                    onSubmit={loginSubmitHandler}
                    noValidate="novalidate"
                  >
                    <div className="col-md-12 form-group p_star">
                      <Input
                        type="email"
                        id="email"
                        element="input"
                        name="email"
                        placeholder="E-mail"
                        errorText="Enter a valid E-mail address."
                        validators={[VALIDATOR_EMAIL()]}
                        onInput={inputHandler}
                      />
                    </div>
                    <div className="col-md-12 form-group p_star">
                      <Input
                        type="password"
                        element="input"
                        id="password"
                        name="password"
                        placeholder="Password"
                        errorText="Enter a valid Password"
                        validators={[VALIDATOR_MINLENGTH(5)]}
                        onInput={inputHandler}
                      />
                    </div>
                    <div className="col-md-12 form-group">
                      <div className="creat_account d-flex align-items-center">
                        <input type="checkbox" id="f-option" name="selector" />
                        <label htmlFor="f-option">Remember me</label>
                      </div>
                      <button
                        type="submit"
                        className="btn_3"
                        disabled={!formState.isValid}
                      >
                        log in
                      </button>
                      <a className="lost_pass" href="/">
                        forget password?
                      </a>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default LoginFormComponent;
