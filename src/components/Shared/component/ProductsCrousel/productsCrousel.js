import React from "react";
import Carousel from "react-elastic-carousel";
// import Item from "./Item";
// import "./styles.css";
import Item from "../SingleItem/SingleItem";
import LoadingSpinner from "../../../Dashboard/Component/Control/LoadingSpinner";

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
];

const ProductCrousel = ({ products, setNotifyhandler }) => {
  return (
    <>
      {products ? (
        <Carousel
          breakPoints={breakPoints}
          isSwiping
          style={{ marginTop: "20px" }}
        >
          {products &&
            products.map((product) => (
              <Item
                key={product._id}
                // productName={product.productName}
                // price={product.price}
                // image={product.image}
                // productId={product._id}
                product={product}
              ></Item>
            ))}
        </Carousel>
      ) : (
        <LoadingSpinner />
      )}
    </>
  );
};

export default ProductCrousel;
