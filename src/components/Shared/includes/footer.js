import React from "react";
// import Input from "../../Shared/FormElements/Input";
const footer = (props) => {
  return (
    <footer className="footer_part">
      <div className="container">
        <div className="row justify-content-around">
          <div className="col-sm-6 col-lg-2">
            <div className="single_footer_part">
              <h4>Top Products</h4>
              <ul className="list-unstyled">
                <li>
                  <a href="/">Managed Website</a>
                </li>
                <li>
                  <a href="/">Manage Reputation</a>
                </li>
                <li>
                  <a href="/">Power Tools</a>
                </li>
                <li>
                  <a href="/">Marketing Service</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-sm-6 col-lg-2">
            <div className="single_footer_part">
              <h4>Quick Links</h4>
              <ul className="list-unstyled">
                <li>
                  <a href="/">Jobs</a>
                </li>
                <li>
                  <a href="/">Brand Assets</a>
                </li>
                <li>
                  <a href="/">Investor Relations</a>
                </li>
                <li>
                  <a href="/">Terms of Service</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-sm-6 col-lg-2">
            <div className="single_footer_part">
              <h4>Features</h4>
              <ul className="list-unstyled">
                <li>
                  <a href="/">Jobs</a>
                </li>
                <li>
                  <a href="/">Brand Assets</a>
                </li>
                <li>
                  <a href="/">Investor Relations</a>
                </li>
                <li>
                  <a href="/">Terms of Service</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-sm-6 col-lg-2">
            <div className="single_footer_part">
              <h4>Resources</h4>
              <ul className="list-unstyled">
                <li>
                  <a href="/">Guides</a>
                </li>
                <li>
                  <a href="/">Research</a>
                </li>
                <li>
                  <a href="/">Experts</a>
                </li>
                <li>
                  <a href="/">Agencies</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-sm-6 col-lg-4">
            <div className="single_footer_part">
              <h4>Newsletter</h4>
              <p>
                Heaven fruitful doesn't over lesser in days. Appear creeping
              </p>
              {/* <div id="mc_embed_signup">
                <form
                  onSubmit={props.subscribeEmailHandler}
                  className="subscribe_form relative mail_part"
                >
                  <Input
                    type="email"
                    element="input"
                    name="email"
                    id="email_footer"
                    placeholder="Email Address"
                    className="form-control"
                  />
                  <button
                    type="submit"
                    name="submit"
                    id="newsletter-submit"
                    className="btn_3 a-contactForm "
                  >
                    subscribe
                  </button>
                  <div className="mt-10 info"></div>
                </form>
              </div> */}
            </div>
          </div>
        </div>
      </div>
      <div className="copyright_part">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="copyright_text">
                <p>
                  Copyright &copy;
                  <script>document.write(new Date().getFullYear());</script>
                  All rights reserved | This template is made with
                  <i className="ti-heart" aria-hidden="true"></i> by
                  <a
                    href="https://colorlib.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Colorlib
                  </a>
                </p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="footer_icon social_icon">
                <ul className="list-unstyled">
                  <li>
                    <a href="/" className="single_social_icon">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                  </li>
                  <li>
                    <a href="/" className="single_social_icon">
                      <i className="fab fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href="/" className="single_social_icon">
                      <i className="fas fa-globe"></i>
                    </a>
                  </li>
                  <li>
                    <a href="/" className="single_social_icon">
                      <i className="fab fa-behance"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default footer;
