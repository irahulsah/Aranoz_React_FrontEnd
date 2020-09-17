import React from "react";

const ReviewSingleItem = ({ name, message }) => {
  return (
    <div className="review_item">
      <div className="media">
        <div className="d-flex">
          <img
            src="/assets/img/product/single-product/review-1.png"
            alt="szzs"
          />
        </div>
        <div className="media-body">
          <h4>{name}</h4>
          <i className="fa fa-star"></i>
          <i className="fa fa-star"></i>
          <i className="fa fa-star"></i>
          <i className="fa fa-star"></i>
          <i className="fa fa-star"></i>
        </div>
      </div>
      <p>{message}</p>
    </div>
  );
};

export default ReviewSingleItem;
