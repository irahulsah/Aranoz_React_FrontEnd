import React, { useContext, useEffect, useState } from "react";
import CheckOutDetail from "../components/Checkout/Pages/CheckoutContent";
import Banner from "../components/Checkout/Component/Baneer";
import Header from "../components/Shared/includes/header";
import Footer from "../components/Shared/includes/footer";
import { AuthContext } from "../components/Shared/context/AuthContext";
import { useHttpClient } from "../components/Shared/hooks/http-hook";

const Checkout = () => {
  const { isLoggedIn, logout, token } = useContext(AuthContext);
  const [cartItems, setCartItems] = useState();
  const { sendRequest } = useHttpClient();
  const [total, setTotal] = useState();

  useEffect(() => {
    const fetchCartItems = async () => {
      let responseData;
      try {
        responseData = await sendRequest(
          process.env.REACT_APP_BACKEND_URL + "/cart",
          "Get",
          {
            Authorization: "Bearer " + token,
          }
        );
        // console.log(responseData);
        setCartItems(responseData.cartItems.cart.items);
      } catch (error) {
        // console.log(error);
      }
    };
    fetchCartItems();
  }, [sendRequest, token]);

  useEffect(() => {
    const totalAmoutCalculator = () => {
      let t;
      if (cartItems) {
        t = cartItems.reduce((res, item) => {
          // console.log(item);
          return res + item.productId.price * item.quantity;
        }, 0);
      }

      setTotal(t);
    };
    totalAmoutCalculator();
  }, [cartItems]);
  // console.log(total);

  return (
    <React.Fragment>
      <Header isLoggedIn={isLoggedIn} logout={logout} />
      <Banner />
      <CheckOutDetail cartItems={cartItems} total={total} />
      <Footer />
    </React.Fragment>
  );
};

export default Checkout;
