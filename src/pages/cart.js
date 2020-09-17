import React, { useContext, useEffect, useState } from "react";

import Banner from "../components/Cart/Component/Banner";
import CartProduct from "../components/Cart/Pages/CartContent";
import Header from "../components/Shared/includes/header";
import Footer from "../components/Shared/includes/footer";
import { AuthContext } from "../components/Shared/context/AuthContext";

import { useHttpClient } from "../components/Shared/hooks/http-hook";

const Cart = () => {
  const { isLoggedIn, logout } = useContext(AuthContext);
  const [cartItems, setCartItems] = useState();
  const [total, setTotal] = useState();
  const { sendRequest } = useHttpClient();
  const auth = useContext(AuthContext);

  useEffect(() => {
    const fetchCartItems = async () => {
      let responseData;
      try {
        responseData = await sendRequest(
          process.env.REACT_APP_BACKEND_URL + "/cart",
          "Get",
          {
            Authorization: "Bearer " + auth.token,
          }
        );
        // console.log(responseData);
        setCartItems(responseData.cartItems.cart.items);
      } catch (error) {
        // console.log(error);
      }
    };
    fetchCartItems();
  }, [sendRequest, auth.token]);

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
  return (
    <React.Fragment>
      <Header isLoggedIn={isLoggedIn} logout={logout} />

      <Banner />
      <CartProduct cartItems={cartItems} total={total} />
      <Footer />
    </React.Fragment>
  );
};

export default Cart;
