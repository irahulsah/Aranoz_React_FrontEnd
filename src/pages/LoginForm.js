import React from "react";

import Banner from "../components/Auth/Component/Banner";
import LoginFormComponent from "../components/Auth/Pages/LoginForm/LoginFormContent";
import Header from "../components/Shared/includes/header";
import Footer from "../components/Shared/includes/footer";

const LoginForm = () => {
  return (
    <React.Fragment>
      <Header />
      <Banner />
      <LoginFormComponent />
      <Footer />
    </React.Fragment>
  );
};

export default LoginForm;
