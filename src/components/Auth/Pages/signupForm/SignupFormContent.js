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

const SignUpFormComponent = () => {
  const [formState, inputHandler] = useForm(
    {
      email: { value: "", isValid: false },
      name: { value: "", isValid: false },
      password: { value: "", isValid: false },
      confirmPassword: { value: "", isValid: false },
    },
    false
  );

  // const [notify,setNotify] = useState({isOpen: false,type:'',message: ''})
  const history = useHistory();
  const auth = useContext(AuthContext);
  const [errorModal, setErrorModel] = useState({
    isOpen: true,
    title: "Oops,an error occured!!!",
    message: "",
  });
  const { sendRequest, error, clearError } = useHttpClient();
  const signUpHandler = async (event) => {
    event.preventDefault();
    try {
      const responseData = await sendRequest(
        process.env.REACT_APP_BACKEND_URL + "/signup",
        "POST",
        { "Content-Type": "application/json" },
        JSON.stringify({
          email: formState.inputs.email.value,
          password: formState.inputs.password.value,
          name: formState.inputs.name.value,
          confirmPassword: formState.inputs.confirmPassword.value,
        })
      );
      // console.log(responseData);
      auth.login(responseData.userId, responseData.token);
      history.push("/login");
    } catch (error) {
      // console.log(error);
    }
  };
  // console.log(error);
  return (
    <React.Fragment>
      {error && (
        <ErrorModal
          errorModal={errorModal}
          setErrorModal={setErrorModel}
          clearError={clearError}
        />
      )}
      <section className="login_part padding_top">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-6">
              <div className="login_part_text text-center">
                <div className="login_part_text_iner">
                  <h2>Login to our Shop?</h2>
                  <p>
                    There are advances being made in science and technology
                    everyday, and a good example of this is the
                  </p>
                  <Link to="/login" className="btn_3">
                    Login in here
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <div className="login_part_form">
                <div className="login_part_form_iner">
                  <h3>
                    Welcome ! <br />
                    Please Sign Up now
                  </h3>
                  <form
                    className="row contact_form"
                    onSubmit={signUpHandler}
                    noValidate="novalidate"
                  >
                    <div className="col-md-12 form-group p_star">
                      <Input
                        type="text"
                        element="input"
                        id="name"
                        name="name"
                        errorText="please,Enter a valid name of atleast 2 character long."
                        validators={[VALIDATOR_MINLENGTH(2)]}
                        onInput={inputHandler}
                        placeholder="Username"
                      />
                    </div>
                    <div className="col-md-12 form-group p_star">
                      <Input
                        type="email"
                        element="input"
                        id="email"
                        name="Email"
                        placeholder="Email"
                        errorText="Please,Enter a valid E-mail address."
                        validators={[VALIDATOR_EMAIL()]}
                        onInput={inputHandler}
                      />
                    </div>
                    <div className="col-md-12 form-group p_star">
                      <Input
                        type="password"
                        element="input"
                        errorText="Please,Enter password atleast of 5 character long..."
                        validators={[VALIDATOR_MINLENGTH(5)]}
                        onInput={inputHandler}
                        id="password"
                        name="password"
                        placeholder="Password"
                      />
                    </div>
                    <div className="col-md-12 form-group p_star">
                      <Input
                        type="password"
                        element="input"
                        errorText="password does not match.."
                        validators={[VALIDATOR_MINLENGTH(5)]}
                        onInput={inputHandler}
                        id="confirmPassword"
                        name="confirmPassword"
                        placeholder="Confirm Password"
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
                        Sign up
                      </button>
                      <Link className="lost_pass" to="/login">
                        Log In
                      </Link>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default SignUpFormComponent;
