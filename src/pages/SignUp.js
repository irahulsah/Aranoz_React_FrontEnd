import React from "react";

import Banner from "../components/Auth/Component/Banner";
import SignUpFormComponent from "../components/Auth/Pages/signupForm/SignupFormContent";
import Header from "../components/Shared/includes/header";
import Footer from "../components/Shared/includes/footer";

const SignUp = () => {
  return (
    <React.Fragment>
      <Header />
      <Banner />
      <SignUpFormComponent />
      <Footer />
    </React.Fragment>
  );
};

export default SignUp;
