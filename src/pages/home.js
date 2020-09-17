import React, { useContext, useEffect, useState } from "react";

import Post from "../components/Home/Pages/HomeContent";
import SubscribeComponent from "../components/Home/Component/subscribe";

import { useForm } from "../components/Shared/hooks/form-hooks";
import { useHttpClient } from "../components/Shared/hooks/http-hook";
import { VALIDATOR_EMAIL } from "../utils/validators";
import Header from "../components/Shared/includes/header";
import Footer from "../components/Shared/includes/footer";
import { AuthContext } from "../components/Shared/context/AuthContext";

import AutoSlider from "../components/Shared/component/pages/AutoSilder";
import NotiFication from "../components/Dashboard/Component/Control/Notification";

const Home = () => {
  const { isLoggedIn, logout } = useContext(AuthContext);
  const { sendRequest } = useHttpClient();
  const [products, setProducts] = useState();
  const [formState, inputHandler] = useForm(
    {
      email: { value: "", isValid: false },
    },
    false
  );
  const [notify, setNotify] = useState({
    isOpen: false,
    type: "",
    message: "",
  });

  useEffect(() => {
    const fetchProducts = async () => {
      // console.log(process.env);
      let products;
      try {
        products = await sendRequest(
          process.env.REACT_APP_BACKEND_URL + "/products"
        );
        // console.log(products);
        setProducts(products.products);
      } catch (error) {
        // console.log(error);
      }
    };
    fetchProducts();
  }, [sendRequest]);

  const advanceBookNowHandler = async (event) => {
    event.preventDefault();
    // console.log(formState);
    try {
      await sendRequest(
        process.env.REACT_APP_BACKEND_URL + "/advance-book-now",
        "POST",
        { "Content-Type": "application/json" },
        JSON.stringify({
          email: formState.inputs.email.value,
        })
      );
      setNotify({
        isOpen: true,
        type: "success",
        message: "Advance booked successfully.",
      });
    } catch (error) {
      // console.log(error);
    }
  };
  return (
    <React.Fragment>
      <Header isLoggedIn={isLoggedIn} logout={logout} />
      {/* <Banner /> */}
      <AutoSlider />
      <Post
        errorText="Please,Enter a Valid Email"
        validators={[VALIDATOR_EMAIL()]}
        onInput={inputHandler}
        advanceBookNowHandler={advanceBookNowHandler}
        products={products}
      />

      <SubscribeComponent />
      <Footer />
      <NotiFication notify={notify} setNotify={setNotify} />
    </React.Fragment>
  );
};

export default Home;
