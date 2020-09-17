import React from "react";
import LoadingSpinner from "../../Dashboard/Component/Control/LoadingSpinner";
import SingleCartProductItem from "./CartSingleItemContent";

import { Link } from "react-router-dom";

const CartProduct = ({ cartItems, total }) => {
  // console.log(cartItems);
  // const [
  //   singleCartItemUpdateDetails,
  //   setSingleCartItemUpdateDetails,
  // ] = useState({ _id: "", quantity: "" });
  if (!cartItems) {
    return <LoadingSpinner />;
  }

  // console.log(cartItems);
  // const updateCartProductHandler = (q, id) => {

  // };
  // const handleQuantity = (q, id) => {
  //   updateCartProductHandler(q, id);
  // };

  // console.log(total, total >= 1);

  return (
    <section className="cart_area padding_top">
      <div className="container">
        <div className="cart_inner">
          <div className="table-responsive">
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">Product</th>
                  <th scope="col">Price</th>
                  <th scope="col">Quantity</th>
                  <th scope="col">Total</th>
                </tr>
              </thead>
              <tbody>
                {cartItems &&
                  cartItems.map((item) => (
                    <SingleCartProductItem
                      key={item._id}
                      product={item.productId}
                      quantity={item.quantity}
                      // getQuantity={handleQuantity}
                    />
                  ))}

                <tr className="shipping_area">
                  <td></td>
                  <td></td>
                  <td>
                    <h5>Shipping</h5>
                  </td>
                  <td>
                    <div className="shipping_box">
                      <ul className="list">
                        <li>
                          <a href="/">Flat Rate: $5.00</a>
                        </li>
                        <li>
                          <a href="/">Free Shipping</a>
                        </li>
                        <li>
                          <a href="/">Flat Rate: $10.00</a>
                        </li>
                        <li className="active">
                          <a href="/">Local Delivery: $2.00</a>
                        </li>
                      </ul>
                      <h6>
                        Calculate Shipping
                        <i className="fa fa-caret-down" aria-hidden="true"></i>
                      </h6>
                      <h4>Total: {total}</h4>
                      {/* <select className="shipping_select">
                        <option value="1">Bangladesh</option>
                        <option value="2">India</option>
                        <option value="4">Pakistan</option>
                      </select>
                      <select className="shipping_select section_bg">
                        <option value="1">Select a State</option>
                        <option value="2">Select a State</option>
                        <option value="4">Select a State</option>
                      </select> */}
                      {/* <input type="text" placeholder="Postcode/Zipcode" /> */}
                      {/* <button
                        className="btn_3"
                        onClick={updateCartProductHandler}
                      >
                        Update Details
                      </button> */}
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
            <div className="checkout_btn_inner float-right">
              <Link className="btn_1" to="/">
                Continue Shopping
              </Link>
              <Link to="/checkout">
                <button className="btn_1 checkout_btn_1" disabled={!total >= 1}>
                  Proceed to checkout
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CartProduct;
