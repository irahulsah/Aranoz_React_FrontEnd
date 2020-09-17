import React, { useContext } from "react";

import Banner from "../components/Contact/Component/Banner";

import ContactUs from "../components/Contact/Pages/ContactContent";
import Header from "../components/Shared/includes/header";
import Footer from "../components/Shared/includes/footer";
import { AuthContext } from "../components/Shared/context/AuthContext";

const Contact = () => {
  const { isLoggedIn, logout } = useContext(AuthContext);
  return (
    <React.Fragment>
      <Header isLoggedIn={isLoggedIn} logout={logout} />
      <Banner />
      <ContactUs />
      <Footer />
    </React.Fragment>
  );
};

export default Contact;
