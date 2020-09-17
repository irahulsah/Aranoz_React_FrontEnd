import React, { useContext } from "react";

import Banner from "../components/TrackingOrder/Component/Banner";
import TrackingOrderDetail from "../components/TrackingOrder/Pages/TrackingOrderContent";

import Header from "../components/Shared/includes/header";
import Footer from "../components/Shared/includes/footer";
import { AuthContext } from "../components/Shared/context/AuthContext";

const TrackingOrder = () => {
  const { isLoggedIn, logout } = useContext(AuthContext);
  return (
    <React.Fragment>
      <Header isLoggedIn={isLoggedIn} logout={logout} />
      <Banner /> <TrackingOrderDetail />
      <Footer />
    </React.Fragment>
  );
};
export default TrackingOrder;
