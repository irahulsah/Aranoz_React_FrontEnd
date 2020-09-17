import React from "react";
const SingleCartItemDetail = ({ productName, quantity, price }) => {
  // total(price, quantity);
  return (
    <li>
      <a href="/checkout">
        {productName}
        <span className="middle">x {quantity}</span>
        <span className="last">${quantity * price}</span>
      </a>
    </li>
  );
};

export default SingleCartItemDetail;
