import React from "react";
import { Link } from "react-router-dom";

const header = ({ isLoggedIn, logout }) => {
  // console.log(isLoggedIn);

  return (
    <header className="main_menu home_menu">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-12">
            <nav className="navbar navbar-expand-lg navbar-light">
              <Link className="navbar-brand" to="/">
                <img src="/assets/img/logo.png" alt="logo" />
              </Link>
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="menu_icon">
                  <i className="fas fa-bars"></i>
                </span>
              </button>

              <div
                className="collapse navbar-collapse main-menu-item"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <Link className="nav-link" to="/">
                      Home
                    </Link>
                  </li>
                  <li className="nav-item dropdown">
                    <a
                      className="nav-link dropdown-toggle"
                      href="blog.html"
                      id="navbarDropdown_1"
                      role="button"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      Shop
                    </a>
                    <div
                      className="dropdown-menu"
                      aria-labelledby="navbarDropdown_1"
                    >
                      <Link className="dropdown-item" to="/category">
                        shop category
                      </Link>
                    </div>
                  </li>
                  <li className="nav-item dropdown">
                    <a
                      className="nav-link dropdown-toggle"
                      href="blog.html"
                      id="navbarDropdown_3"
                      role="button"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      pages
                    </a>
                    <div
                      className="dropdown-menu"
                      aria-labelledby="navbarDropdown_2"
                    >
                      {!isLoggedIn && (
                        <Link className="dropdown-item" to="/login">
                          {" "}
                          login
                        </Link>
                      )}
                      {!isLoggedIn && (
                        <Link className="dropdown-item" to="/signup">
                          {" "}
                          SignUp
                        </Link>
                      )}
                      {/* {isLoggedIn && (
                        <Link className="dropdown-item" to="/order">
                          tracking
                        </Link>
                      )}
                      {isLoggedIn && (
                        <Link className="dropdown-item" to="/checkout">
                          product checkout
                        </Link>
                      )} */}
                      {isLoggedIn && (
                        <Link className="dropdown-item" to="/cart">
                          shopping cart
                        </Link>
                      )}
                    </div>
                  </li>

                  <li className="nav-item">
                    <Link className="nav-link" to="/contact">
                      Contact
                    </Link>
                  </li>
                  {isLoggedIn && (
                    <li className="nav-item">
                      <Link className="nav-link" to="/dashboard">
                        Dashboard
                      </Link>
                    </li>
                  )}
                  {isLoggedIn && (
                    <li className="nav-item">
                      <button className="nav-link btn" onClick={logout}>
                        Logout
                      </button>
                    </li>
                  )}
                </ul>
              </div>
              <div className="hearer_icon d-flex">
                <Link id="search_1" href="/">
                  <i className="ti-search"></i>
                </Link>
                <a href="/">
                  <i className="ti-heart"></i>
                </a>
                {isLoggedIn && (
                  <div className="dropdown cart">
                    <Link
                      className="dropdown-toggle"
                      to="/cart"
                      id="navbarDropdown3"
                      role="button"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <i className="fas fa-cart-plus"></i>
                    </Link>
                  </div>
                )}
              </div>
            </nav>
          </div>
        </div>
      </div>
      {/* <div className="search_input" id="search_input_box">
        <div className="container">
          <form className="d-flex justify-content-between search-inner">
            <input
              type="text"
              className="form-control"
              id="search_input"
              placeholder="Search Here"
            />
            <button type="submit" className="btn"></button>
            <span
              className="ti-close"
              id="close_search"
              title="Close Search"
            ></span>
          </form>
        </div>
      </div> */}
    </header>
  );
};

export default header;
