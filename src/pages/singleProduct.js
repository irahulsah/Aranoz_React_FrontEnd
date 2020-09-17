import React, { useContext, useEffect, useState } from "react";

import Banner from "../components/SingleProduct/Component/Banner";
import SingleProductPage from "../components/SingleProduct/Pages/SingleProductContent";
import Header from "../components/Shared/includes/header";
import Footer from "../components/Shared/includes/footer";
import { AuthContext } from "../components/Shared/context/AuthContext";
import { useHttpClient } from "../components/Shared/hooks/http-hook";
import { useParams } from "react-router-dom";

const SingleProduct = () => {
  const { isLoggedIn, logout } = useContext(AuthContext);
  const [product, setProduct] = useState();

  const [reviews, setReviews] = useState();
  const { sendRequest } = useHttpClient();
  const { productId } = useParams();
  // console.log(productId);

  useEffect(() => {
    const fetchProduct = async () => {
      let productData;
      try {
        productData = await sendRequest(
          `${process.env.REACT_APP_BACKEND_URL}/product/${productId}`
        );
        setProduct(productData.product);
      } catch (error) {
        // console.log(error);
      }
    };
    fetchProduct();
  }, [sendRequest, productId]);
  // console.log(product);

  useEffect(() => {
    const fetchReviews = async () => {
      let reviewData = await sendRequest(
        `${process.env.REACT_APP_BACKEND_URL}/${productId}/product`
      );
      // console.log(reviewData);
      setReviews(reviewData.reviews.reviews);
    };
    fetchReviews();
  }, [sendRequest, productId]);
  return (
    <React.Fragment>
      <Header isLoggedIn={isLoggedIn} logout={logout} />
      <Banner />
      <SingleProductPage product={product} reviews={reviews} />
      <Footer />
    </React.Fragment>
  );
};

export default SingleProduct;
