import React, { Suspense } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import "./App.css";

import { AuthContext } from "./components/Shared/context/AuthContext";
import { useAuth } from "./components/Shared/hooks/auth-hook";

import LoadingSpinner from "./components/Dashboard/Component/Control/LoadingSpinner";

//React.lazy imports

const Home = React.lazy(() => import("./pages/home"));
const ProductCategory = React.lazy(() => import("./pages/category"));
const SingleProduct = React.lazy(() => import("./pages/singleProduct"));
const LoginForm = React.lazy(() => import("./pages/LoginForm"));
const TrackingOrder = React.lazy(() => import("./pages/trackingOrder"));
const Checkout = React.lazy(() => import("./pages/checkout"));
const Cart = React.lazy(() => import("./pages/cart"));
const OrderConfirmation = React.lazy(() => import("./pages/orderConfirmation"));
const Contact = React.lazy(() => import("./pages/contact"));
const SignUpForm = React.lazy(() => import("./pages/SignUp"));
const Dashboard = React.lazy(() => import("./pages/dashboard"));

const App = () => {
  const { token, userId, login, logout } = useAuth();
  let routes;
  if (token) {
    routes = (
      <Switch>
        <Route path="/" component={Home} exact />

        <Route path="/product/:productId" component={SingleProduct} exact />
        <Route path="/order" component={TrackingOrder} exact />

        <Route path="/checkout" component={Checkout} exact />

        <Route path="/cart" component={Cart} exact />

        <Route
          path="/order/confirmation/:orderId"
          component={OrderConfirmation}
          exact
        />
        <Route path="/contact" component={Contact} exact />

        <Route path="/category" component={ProductCategory} exact />

        <Route path="/dashboard" component={Dashboard} exact />

        <Redirect to="/" />
      </Switch>
    );
  } else {
    routes = (
      <Switch>
        <Route path="/" component={Home} exact />

        <Route path="/product/:productId" component={SingleProduct} exact />

        <Route path="/login" component={LoginForm} exact />
        <Route path="/signup" component={SignUpForm} exact />

        <Route path="/contact" component={Contact} exact />

        <Route path="/category" component={ProductCategory} exact />

        <Redirect to="/" />
      </Switch>
    );
  }

  return (
    <AuthContext.Provider
      value={{ login, logout, isLoggedIn: !!token, userId, token }}
    >
      <Router>
        <Suspense fallback={<LoadingSpinner />}>
          <main>{routes}</main>
        </Suspense>
      </Router>
    </AuthContext.Provider>
  );
};

export default App;
