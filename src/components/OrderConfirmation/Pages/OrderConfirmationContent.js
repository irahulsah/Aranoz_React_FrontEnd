import React from "react";
import LoadingSpinner from "../../Dashboard/Component/Control/LoadingSpinner";
import SingleOrderOrderInfo from "./SingleItemOrderInfoContent";
import SingleItemProductDetail from "./SingleItemOrderConfirmation";

const OrderConfirmationDisplay = ({ orderDetails: order }) => {
  // console.log(orderDetails);

  return (
    <section className="confirmation_part padding_top">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="confirmation_tittle">
              <span>Thank you. Your order has been received.</span>
            </div>
          </div>
          <div className="col-lg-6 col-lx-4">
            <div className="single_confirmation_details">
              <h4>order info</h4>

              {order ? (
                <SingleOrderOrderInfo key="order._id" order={order} />
              ) : (
                <LoadingSpinner />
              )}
            </div>
          </div>
          <div className="col-lg-6 col-lx-4">
            <div className="single_confirmation_details">
              <h4>Billing Address</h4>
              {order && (
                <ul key={order._id}>
                  <li>
                    <p>Street</p>
                    <span>: {order.address1}</span>
                  </li>
                  <li>
                    <p>city</p>
                    <span>: {order.city}</span>
                  </li>
                  <li>
                    <p>country</p>
                    <span>: {order.country}</span>
                  </li>
                  <li>
                    <p>postcode</p>
                    <span>: {order.zipCode}</span>
                  </li>
                </ul>
              )}
            </div>
          </div>
          <div className="col-lg-6 col-lx-4">
            <div className="single_confirmation_details">
              <h4>shipping Address</h4>
              {order && (
                <ul key={order._id}>
                  <li>
                    <p>Street</p>
                    <span>: {order.address1}</span>
                  </li>
                  <li>
                    <p>city</p>
                    <span>: {order.city}</span>
                  </li>
                  <li>
                    <p>country</p>
                    <span>: {order.country}</span>
                  </li>
                  <li>
                    <p>postcode</p>
                    <span>: {order.zipCode}</span>
                  </li>
                </ul>
              )}
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <div className="order_details_iner">
              <h3>Order Details</h3>
              <table className="table table-borderless">
                <thead>
                  <tr>
                    <th scope="col" colSpan="2">
                      Product
                    </th>
                    <th scope="col">Quantity</th>
                    <th scope="col">Total</th>
                  </tr>
                </thead>
                <tbody>
                  {order &&
                    order.items.map((item) => (
                      <SingleItemProductDetail items={item} key={item._id} />
                    ))}

                  <tr>
                    <th colSpan="3">Subtotal</th>
                    <th>
                      {" "}
                      <span>${order && order.totalAmount + 50}.00</span>
                    </th>
                  </tr>
                  <tr>
                    <th colSpan="3">shipping</th>
                    <th>
                      <span>flat rate: $50.00</span>
                    </th>
                  </tr>
                </tbody>
                <tfoot>
                  <tr>
                    <th scope="col" colSpan="3">
                      Quantity
                    </th>
                    <th scope="col">Total: ${order && order.totalAmount}.00</th>
                  </tr>
                </tfoot>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OrderConfirmationDisplay;
