import React, { useContext, useState } from "react";
import {
  VALIDATOR_EMAIL,
  VALIDATOR_MAXLENGTH,
  VALIDATOR_MINLENGTH,
  VALIDATOR_REQUIRE,
} from "../../../utils/validators";
import LoadingSpinner from "../../Dashboard/Component/Control/LoadingSpinner";
import Input from "../../Shared/FormElements/Input";
import { useForm } from "../../Shared/hooks/form-hooks";
import { useHttpClient } from "../../Shared/hooks/http-hook";
import SingleCartItemDetail from "./CheckoutSingleItemContent";
import { AuthContext } from "../../Shared/context/AuthContext";

import { useHistory } from "react-router-dom";
import ErrorModal from "../../Shared/component/ErrorModal/ErrorModal";

const CheckOutDetail = ({ cartItems, total }) => {
  const [formState, inputHandler] = useForm(
    {
      firstName: { value: "", isValid: false },
      lastName: { value: "", isValid: false },
      phoneNumber: { value: "", isValid: false },
      email: { value: "", isValid: false },
      country: { value: "", isValid: false },
      address1: { value: "", isValid: false },
      // address2: { value: "", isValid: false },
      city: { value: "", isValid: false },
      zipCode: { value: "", isValid: false },
    },
    false
  );
  const { sendRequest, error, clearError } = useHttpClient();
  const [errorModal, setErrorModal] = useState({
    isOpen: true,
    title: "Oops, an error occured!!",
    content: "",
  });
  const { token } = useContext(AuthContext);
  const history = useHistory();

  const orderDetailSubmitHandler = async (event) => {
    event.preventDefault();

    try {
      const resData = await sendRequest(
        process.env.REACT_APP_BACKEND_URL + "/order-details",
        "POST",
        {
          "Content-Type": "application/json",
          Authorization: "Bearer " + token,
        },
        JSON.stringify({
          firstName: formState.inputs.firstName.value,
          lastName: formState.inputs.lastName.value,
          phoneNumber: formState.inputs.phoneNumber.value,
          email: formState.inputs.email.value,
          country: formState.inputs.country.value,
          address1: formState.inputs.address1.value,
          city: formState.inputs.city.value,
          zipCode: formState.inputs.zipCode.value,
          items: cartItems,
          totalAmount: total - 50,
        })
      );
      // console.log(resData.Orders._id);
      history.push(`/order/confirmation/${resData.Orders._id}`);
    } catch (error) {
      // console.log(error);
    }
  };
  // console.log(total);

  return (
    <>
      {error && (
        <ErrorModal
          errorModal={{ ...errorModal, content: error }}
          setErrorModal={setErrorModal}
          clearError={clearError}
        />
      )}
      <section className="checkout_area padding_top">
        <div className="container">
          {/* <div className="returning_customer"> */}
          {/* <div className="check_title">
            <h2>
              Returning Customer?
              <a href="/login">Click here to login</a>
            </h2>
          </div> */}
          {/* <p>
            If you have shopped with us before, please enter your details in the
            boxes below. If you are a new customer, please proceed to the
            Billing & Shipping section.
          </p>
        </div> */}

          {/* <div className="cupon_area">
          <div className="check_title">
            <h2>
              Have a coupon?
              <a href="/">Click here to enter your code</a>
            </h2>
          </div>
          <input type="text" placeholder="Enter coupon code" />
          <a className="tp_btn" href="/">
            Apply Coupon
          </a>
        </div> */}
          <div className="billing_details">
            <div className="row">
              <div className="col-lg-8">
                <h3>Billing Details</h3>
                <form
                  className="row contact_form"
                  noValidate="novalidate"
                  onSubmit={orderDetailSubmitHandler}
                >
                  <div className="col-md-6 form-group p_star">
                    <Input
                      type="text"
                      element="input"
                      id="firstName"
                      name="name"
                      placeholder="First Name"
                      errorText="Please,Enter the First Name"
                      onInput={inputHandler}
                      validators={[VALIDATOR_REQUIRE()]}
                    />
                  </div>
                  <div className="col-md-6 form-group p_star">
                    <Input
                      type="text"
                      element="input"
                      placeholder="Last Name"
                      id="lastName"
                      name="name"
                      validators={[VALIDATOR_REQUIRE()]}
                      onInput={inputHandler}
                      errorText="Please,Enter the Last Name"
                    />
                  </div>

                  <div className="col-md-6 form-group p_star">
                    <Input
                      type="text"
                      element="input"
                      placeholder="Phone number with country code"
                      id="phoneNumber"
                      name="number"
                      onInput={inputHandler}
                      validators={[
                        VALIDATOR_REQUIRE(),
                        VALIDATOR_MAXLENGTH(14),
                      ]}
                      errorText="Please,Enter Valid Phone Number."
                    />
                  </div>
                  <div className="col-md-6 form-group p_star">
                    <Input
                      type="text"
                      element="input"
                      placeholder="Email Address"
                      id="email"
                      name="compemailany"
                      onInput={inputHandler}
                      validators={[VALIDATOR_EMAIL()]}
                      errorText="Please,Enter Valid Email Address."
                    />
                  </div>
                  <div className="col-md-6 form-group p_star">
                    <Input
                      type="text"
                      element="input"
                      placeholder="Country Name"
                      id="country"
                      name="country"
                      onInput={inputHandler}
                      validators={[VALIDATOR_REQUIRE()]}
                      errorText="Please,Enter your Country Name."
                    />
                  </div>
                  <div className="col-md-12 form-group p_star">
                    <Input
                      type="text"
                      element="input"
                      id="address1"
                      name="address1"
                      onInput={inputHandler}
                      validators={[VALIDATOR_MINLENGTH(2)]}
                      errorText="Please,Enter Your address."
                      placeholder="Address line 01"
                    />
                  </div>
                  {/* <div className="col-md-12 form-group p_star">
                  <Input
                    type="text"
                    element="input"
                    id="address2"
                    name="address2"
                    onInput={inputHandler}
                    validators={[]}
                    placeholder="Address line 02"
                  />
                </div> */}
                  <div className="col-md-12 form-group p_star">
                    <Input
                      type="text"
                      element="input"
                      className="form-control"
                      id="city"
                      name="city"
                      onInput={inputHandler}
                      validators={[VALIDATOR_REQUIRE()]}
                      errorText="Please,Enter Your City Name."
                      placeholder="City/Town"
                    />
                  </div>

                  <div className="col-md-12 form-group">
                    <Input
                      type="text"
                      element="input"
                      name="zipCode"
                      id="zipCode"
                      placeholder="Postcode/ZIP"
                      onInput={inputHandler}
                      errorText="Please,Enter Your ZipCode."
                      validators={[VALIDATOR_REQUIRE()]}
                    />
                  </div>
                  {/* <div className="col-md-12 form-group">
                  <div className="creat_account">
                    <input type="checkbox" id="f-option2" name="selector" />
                    <label htmlFor="f-option2">Create an account?</label>
                  </div>
                </div>
                <div className="col-md-12 form-group">
                  <div className="creat_account">
                    <h3>Shipping Details</h3>
                    <input type="checkbox" id="f-option3" name="selector" />
                    <label htmlFor="f-option3">
                      Ship to a different address?
                    </label>
                  </div>
                  <textarea
                    className="form-control"
                    name="message"
                    id="message"
                    rows="1"
                    placeholder="Order Notes"
                  ></textarea>
                </div> */}
                  {/* <button type="submit" className="btn_3">
                  Submit
                </button> */}
                </form>
              </div>
              <div className="col-lg-4">
                <div className="order_box">
                  <h2>Your Order</h2>
                  <ul className="list">
                    <li>
                      <a href="/">
                        Product
                        <span>Total</span>
                      </a>
                    </li>
                    {cartItems ? (
                      cartItems.map((item) => (
                        <SingleCartItemDetail
                          key={item._id}
                          quantity={item.quantity}
                          price={item.productId.price}
                          productName={item.productId.productName}
                          // total={totalHandler}
                        />
                      ))
                    ) : (
                      <LoadingSpinner />
                    )}
                  </ul>
                  <ul className="list list_2">
                    <li>
                      <a href="/">
                        Subtotal
                        <span>${!!total && total}</span>
                      </a>
                    </li>
                    <li>
                      <a href="/">
                        Shipping
                        <span>Flat rate: $50.00</span>
                      </a>
                    </li>
                    <li>
                      <a href="/">
                        Total
                        <span>${!!total && total - 50}</span>
                      </a>
                    </li>
                  </ul>
                  <div className="payment_item">
                    <div className="radion_btn">
                      <input type="radio" id="f-option5" name="selector" />
                      <label htmlFor="f-option5">Check payments</label>
                      <div className="check"></div>
                    </div>
                    <p>
                      Please send a check to Store Name, Store Street, Store
                      Town, Store State / County, Store Postcode.
                    </p>
                  </div>
                  <div className="payment_item active">
                    <div className="radion_btn">
                      <input type="radio" id="f-option6" name="selector" />
                      <label htmlFor="f-option6">Paypal </label>
                      <img src="img/product/single-product/card.jpg" alt="" />
                      <div className="check"></div>
                    </div>
                    <p>
                      Please send a check to Store Name, Store Street, Store
                      Town, Store State / County, Store Postcode.
                    </p>
                  </div>
                  <div className="creat_account">
                    <input type="checkbox" id="f-option4" name="selector" />
                    <label htmlFor="f-option4">I’ve read and accept the </label>
                    <a href="/">terms & conditions*</a>
                  </div>
                  <button
                    className="btn_3"
                    onClick={orderDetailSubmitHandler}
                    disabled={!formState.isValid}
                  >
                    Confirm Order
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CheckOutDetail;
