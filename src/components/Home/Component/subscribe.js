import React, { useState } from "react";
import { useForm } from "../../Shared/hooks/form-hooks";
import { VALIDATOR_EMAIL } from "../../../utils/validators";
import Input from "../../Shared/FormElements/Input";
import { useHttpClient } from "../../Shared/hooks/http-hook";
import Notification from "../../Dashboard/Component/Control/Notification";

const SubscribeComponent = () => {
  const [formState, inputHandler] = useForm(
    {
      email_subscribe: { value: "", isValid: false },
    },
    false
  );
  const [notify, setNotify] = useState({
    isOpen: false,
    type: "",
    message: "",
  });

  const { sendRequest } = useHttpClient();

  const subscribeEmailHandler = async (event) => {
    event.preventDefault();
    // console.log(formState);
    try {
      await sendRequest(
        "http://localhost:8080/subscribe",
        "POST",
        { "Content-Type": "application/json" },
        JSON.stringify({
          email_subscribe: formState.inputs.email_subscribe.value,
        })
      );
      setNotify({
        isOpen: true,
        type: "success",
        message: "Subscribed for updates successfully",
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <React.Fragment>
      {" "}
      <section className="subscribe_area section_padding">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-7">
              <div className="subscribe_area_text text-center">
                <h5>Join Our Newsletter</h5>
                <h2>Subscribe to get Updated with new offers</h2>
                <form className="input-group" onSubmit={subscribeEmailHandler}>
                  <Input
                    type="email"
                    id="email_subscribe"
                    element="input"
                    placeholder="enter email address"
                    ariaLabel="Recipient's username"
                    ariaDescribedby="basic-addon2"
                    errorText="Please,Enter valid email address.."
                    validators={[VALIDATOR_EMAIL()]}
                    onInput={inputHandler}
                  />{" "}
                  <div className="input-group-append">
                    <button
                      type="submit"
                      className="input-group-text btn_2"
                      id="basic-addon2"
                    >
                      subscribe now
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="client_logo padding_top">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-12">
              <div className="single_client_logo">
                <img src="/assets/img/client_logo/client_logo_1.png" alt="" />
              </div>
              <div className="single_client_logo">
                <img src="/assets/img/client_logo/client_logo_2.png" alt="" />
              </div>
              <div className="single_client_logo">
                <img src="/assets/img/client_logo/client_logo_3.png" alt="" />
              </div>
              <div className="single_client_logo">
                <img src="/assets/img/client_logo/client_logo_4.png" alt="" />
              </div>
              <div className="single_client_logo">
                <img src="/assets/img/client_logo/client_logo_5.png" alt="" />
              </div>
              <div className="single_client_logo">
                <img src="/assets/img/client_logo/client_logo_3.png" alt="" />
              </div>
              <div className="single_client_logo">
                <img src="/assets/img/client_logo/client_logo_1.png" alt="" />
              </div>
              <div className="single_client_logo">
                <img src="/assets/img/client_logo/client_logo_2.png" alt="" />
              </div>
              <div className="single_client_logo">
                <img src="/assets/img/client_logo/client_logo_3.png" alt="" />
              </div>
              <div className="single_client_logo">
                <img src="/assets/img/client_logo/client_logo_4.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <Notification notify={notify} setNotify={setNotify} />
    </React.Fragment>
  );
};

export default SubscribeComponent;
