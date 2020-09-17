import React from "react";

const SingleCartProductItem = ({ product, quantity }) => {
  // console.log(product, quantity);
  // const [quantityInc, setQuantityInc] = useState({
  //   quantity: quantity || 1,
  //   id: product._id,
  // });

  // const incrementHandler = (q, id) => {
  //   // console.log(q + 1);
  //   setQuantityInc({ quantity: q + 1, id });
  // };
  // const decrementHandler = (q, id) => {
  //   setQuantityInc({ quantity: q - 1, id });
  // };

  // if (quantityInc) {
  //   getQuantity(quantityInc.quantity, quantityInc.id);
  // }
  // console.log(quantityInc.quantity, quantityInc.id);

  return (
    <tr>
      <td>
        <div className="media">
          <div className="d-flex">
            <img
              src={`${process.env.REACT_APP_ASSET_URL}/${product.image}`}
              alt={`${product.image}`}
              style={{
                backgroundSize: "cover",
                width: "100px",
                height: "100px",
              }}
            />
          </div>
          <div className="media-body">
            <p>{product.productName}</p>
          </div>
        </div>
      </td>
      <td>
        <h5>${product.price}</h5>
      </td>
      <td>
        <div className="product_count">
          {/* <span className="input-number-decrement">
            {" "}
            <i
              className="ti-angle-down"
              onClick={() =>
                incrementHandler(quantityInc.quantity, product._id)
              }
            ></i>
          </span> */}
          <input
            className="input-number"
            type="text"
            value={quantity}
            onChange={() => {}}
            min="0"
            max="10"
          />
          {/* <span className="input-number-increment">
            {" "}
            <i
              className="ti-angle-up"
              onClick={() =>
                decrementHandler(quantityInc.quantity, product._id)
              }
            ></i>
          </span> */}
        </div>
      </td>
      <td>
        <h5>${product.price * quantity}</h5>
      </td>
    </tr>
  );
};

export default SingleCartProductItem;
