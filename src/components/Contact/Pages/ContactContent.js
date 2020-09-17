import React, { useState } from "react";
import { useForm } from "../../Shared/hooks/form-hooks";
import {
  VALIDATOR_MINLENGTH,
  VALIDATOR_EMAIL,
} from "../../../utils/validators";

import Input from "../../Shared/FormElements/Input";

import { useHttpClient } from "../../Shared/hooks/http-hook";

import NotiFication from "../../Dashboard/Component/Control/Notification";

import ErrorModal from "../../Shared/component/ErrorModal/ErrorModal";

const ContactUs = () => {
  const { sendRequest, error, clearError } = useHttpClient();
  // console.log(error);
  const [formState, inputHandler] = useForm(
    {
      email: { value: "", isValid: false },
      message: { value: "", isValid: false },
      name: { value: "", isValid: false },
      subject: { value: "", isValid: false },
    },
    false
  );
  // console.log(resetForm);
  const [errorModal, setErrorModal] = useState({
    isOpen: true,
    title: "Oops,an error encountered!!",
    content: "",
  });
  const [notify, setNotify] = useState({
    isOpen: false,
    type: "",
    message: "",
  });
  // console.log(formState);

  const contactFormSubmitHandler = async (event) => {
    event.preventDefault();
    let responsedata;

    try {
      responsedata = await sendRequest(
        process.env.REACT_APP_BACKEND_URL + "/contact",
        "POST",
        { "Content-Type": "application/json" },
        JSON.stringify({
          name: formState.inputs.name.value,
          subject: formState.inputs.subject.value,
          email: formState.inputs.email.value,
          message: formState.inputs.message.value,
        })
      );
      // console.log(responsedata);
      setNotify({
        isOpen: true,
        type: "success",
        message: "Submitted succesfully",
      });
    } catch (error) {
      // console.log(error);
    }
  };
  return (
    <>
      {!!error && (
        <ErrorModal
          errorModal={{ ...errorModal, content: error }}
          setErrorModal={setErrorModal}
          clearError={clearError}
        />
      )}
      <section className="contact-section padding_top">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h2 className="contact-title">Get in Touch</h2>
            </div>
            <div className="col-lg-8">
              <form
                className="form-contact contact_form"
                onSubmit={contactFormSubmitHandler}
                noValidate="novalidate"
              >
                <div className="row">
                  <div className="col-12">
                    <div className="form-group">
                      <Input
                        element="textarea"
                        name="message"
                        id="message"
                        onInput={inputHandler}
                        validators={[VALIDATOR_MINLENGTH(6)]}
                        errorText="Please,Enter a message of atleast 5 character long.."
                        placeholder="Enter Message"
                      ></Input>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group">
                      <Input
                        element="input"
                        name="name"
                        id="name"
                        type="text"
                        onInput={inputHandler}
                        validators={[VALIDATOR_MINLENGTH(2)]}
                        errorText="Please,Enter Name of atleast 3 character long..."
                        placeholder="Enter name.."
                      />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group">
                      <Input
                        element="input"
                        name="email"
                        id="email"
                        type="email"
                        onInput={inputHandler}
                        errorText="Please,Enter a valid email..."
                        validators={[VALIDATOR_EMAIL()]}
                        placeholder="Enter email address"
                      />
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-group">
                      <Input
                        name="subject"
                        element="input"
                        id="subject"
                        type="text"
                        onInput={inputHandler}
                        errorText="Please,Enter subject of atleast 3 character long..."
                        validators={[VALIDATOR_MINLENGTH(3)]}
                        placeholder="Enter Subject"
                      />
                    </div>
                  </div>
                </div>
                <div className="form-group mt-3">
                  <button
                    type="submit"
                    className="btn_3 button-contactForm"
                    disabled={!formState.isValid}
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
            <div className="col-lg-4">
              <div className="media contact-info">
                <span className="contact-info__icon">
                  <i className="ti-home"></i>
                </span>
                <div className="media-body">
                  <h3>Buttonwood, California.</h3>
                  <p>Rosemead, CA 91770</p>
                </div>
              </div>
              <div className="media contact-info">
                <span className="contact-info__icon">
                  <i className="ti-tablet"></i>
                </span>
                <div className="media-body">
                  <h3>00 (440) 9865 562</h3>
                  <p>Mon to Fri 9am to 6pm</p>
                </div>
              </div>
              <div className="media contact-info">
                <span className="contact-info__icon">
                  <i className="ti-email"></i>
                </span>
                <div className="media-body">
                  <h3>support@colorlib.com</h3>
                  <p>Send us your query anytime!</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <NotiFication notify={notify} setNotify={setNotify} />
      </section>
    </>
  );
};

export default ContactUs;
