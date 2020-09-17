import React from "react";

const SingleOrderOrderInfo = ({ order }) => {
  return (
    <ul>
      <li>
        <p>order number</p>
        <span>: {order._id}</span>
      </li>
      <li>
        <p>data</p>
        <span>: Oct 03, 2017</span>
      </li>
      <li>
        <p>total</p>
        <span>: USD {order.totalAmount}</span>
      </li>
      <li>
        <p>mayment methord</p>
        <span>: Check payments</span>
      </li>{" "}
    </ul>
  );
};

export default SingleOrderOrderInfo;
