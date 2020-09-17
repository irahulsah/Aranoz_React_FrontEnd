import React from "react";
import Input from "../../Shared/FormElements/Input";

import ProductCrousel from "../../Shared/component/ProductsCrousel/productsCrousel";

const Post = ({
  errorText,
  advanceBookNowHandler,
  validators,
  onInput,
  products,
}) => {
  return (
    <React.Fragment>
      {" "}
      <section className="feature_part padding_top">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="section_tittle text-center">
                <h2>Featured Category</h2>
              </div>
            </div>
          </div>
          <div className="row align-items-center justify-content-between">
            <div className="col-lg-7 col-sm-6">
              <div className="single_feature_post_text">
                <p>Premium Quality</p>
                <h3>Latest foam Sofa</h3>
                <a href="/" className="feature_btn">
                  EXPLORE NOW <i className="fas fa-play"></i>
                </a>
                <img src="/assets/img/feature/feature_1.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="product_list section_padding">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-12">
              <div className="section_tittle text-center">
                <h2>
                  awesome <span>shop</span>
                </h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="row align-items-center justify-content-between">
                <ProductCrousel products={products} />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="our_offer section_padding">
        <div className="container">
          <div className="row align-items-center justify-content-between">
            <div className="col-lg-6 col-md-6">
              <div className="offer_img">
                <img src="/assets/img/offer_img.png" alt="" />
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <div className="offer_text">
                <h2>Weekly Sale on 60% Off All Products</h2>
                <div className="date_countdown">
                  <div id="timer">
                    <div id="days" className="date"></div>
                    <div id="hours" className="date"></div>
                    <div id="minutes" className="date"></div>
                    <div id="seconds" className="date"></div>
                  </div>
                </div>
                <form onSubmit={advanceBookNowHandler} className="input-group">
                  <Input
                    type="text"
                    element="input"
                    id="email"
                    placeholder="enter email address"
                    aria-label="Recipient's username"
                    aria-describedby="basic-addon2"
                    errorText={errorText}
                    validators={validators}
                    onInput={onInput}
                  />
                  <div className="input-group-append">
                    <button
                      type="submit"
                      className="input-group-text btn_2"
                      id="basic-addon2"
                    >
                      book now
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="product_list best_seller section_padding">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-12">
              <div className="section_tittle text-center">
                <h2>
                  Best Sellers <span>shop</span>
                </h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="row align-items-center justify-content-between">
                <ProductCrousel products={products} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Post;
