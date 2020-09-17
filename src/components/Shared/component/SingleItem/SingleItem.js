import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { useHttpClient } from "../../hooks/http-hook";

import Notification from "../../../Dashboard/Component/Control/Notification";
import ErrorModal from "../ErrorModal/ErrorModal";
import LoadingSpinner from "../../../Dashboard/Component/Control/LoadingSpinner";

const SingleProductItem = ({ product }) => {
  const { sendRequest, error, clearError, isLoading } = useHttpClient();
  const { token } = useContext(AuthContext);

  const [errorModal, setErrorModal] = useState({
    isOpen: true,
    title: "Opps,an error encountered!!",
    content: "",
  });
  const [notify, setNotify] = useState({
    isOpen: false,
    type: "",
    message: "",
  });

  const handleAddToCart = async (event) => {
    event.preventDefault();

    // console.log(productId);
    try {
      const resData = await sendRequest(
        process.env.REACT_APP_BACKEND_URL + "/add-to-cart",
        "POST",
        {
          "Content-Type": "application/json",
          Authorization: "Bearer " + token,
        },
        JSON.stringify({ productId: product._id })
      );
      setNotify({
        isOpen: true,
        type: "success",
        message: "Successfully added to cart",
      });
      // console.log(resData);
    } catch (error) {
      // console.log(error);
    }
  };

  return (
    <>
      {error && (
        <ErrorModal
          errorModal={{ ...errorModal, content: error }}
          setErrorModal={setErrorModal}
          clearError={clearError}
        />
      )}
      {isLoading && <LoadingSpinner />}
      {!isLoading && product && (
        <div className="single_product_item" style={{ padding: "0px 10px" }}>
          <img
            src={`${process.env.REACT_APP_ASSET_URL}/${product.image}`}
            alt={product.image}
          ></img>

          <div className="single_product_text">
            <h4>{product.productName}</h4>

            <h3>${product.price}</h3>
            <Link to={`/product/${product._id}`} className="add_cart">
              View Details
            </Link>
            <a
              className="add_cart"
              // to="/"
              onClick={handleAddToCart}
              style={{ cursor: "pointer" }}
            >
              + add to cart<i className="ti-heart"></i>
            </a>
          </div>
        </div>
      )}
      <Notification notify={notify} setNotify={setNotify} />
    </>
  );
};

export default SingleProductItem;
