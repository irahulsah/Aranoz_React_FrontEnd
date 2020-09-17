import React, { useContext, useEffect, useState } from "react";

import Banner from "../components/OrderConfirmation/Component/Banner";
import OrderConfirmationDisplay from "../components/OrderConfirmation/Pages/OrderConfirmationContent";
import Header from "../components/Shared/includes/header";
import Footer from "../components/Shared/includes/footer";
import { AuthContext } from "../components/Shared/context/AuthContext";
import { useHttpClient } from "../components/Shared/hooks/http-hook";
import { useParams } from "react-router-dom";

const OrderConfirmation = () => {
  const { isLoggedIn, logout } = useContext(AuthContext);
  const { sendRequest } = useHttpClient();
  const { token } = useContext(AuthContext);
  const [orderDetails, setOrderDetails] = useState();
  const { orderId } = useParams();
  // console.log(orderId);

  useEffect(() => {
    const fetchOrders = async () => {
      let responseData;
      try {
        responseData = await sendRequest(
          `${process.env.REACT_APP_BACKEND_URL}/order-details/${orderId}`,
          "GET",
          { Authorization: "Bearer " + token }
        );
        // console.log(responseData);
        setOrderDetails(responseData.OrderDetails);
      } catch (error) {
        // console.log(error);
      }
    };
    fetchOrders();
  }, [sendRequest, token, orderId]);

  return (
    <React.Fragment>
      <Header isLoggedIn={isLoggedIn} logout={logout} />
      <Banner />
      <OrderConfirmationDisplay orderDetails={orderDetails} />
      <Footer />
    </React.Fragment>
  );
};

export default OrderConfirmation;
