import React from "react";

const SingleProductItemDetail = ({ items }) => {
  // console.log(items);
  return (
    <tr>
      <th colSpan="2">
        <span>{items.productId.productName}</span>
      </th>
      <th>x{items.quantity}</th>
      <th>
        {" "}
        <span>${items.productId.price}.00</span>
      </th>
    </tr>
  );
};

export default SingleProductItemDetail;
