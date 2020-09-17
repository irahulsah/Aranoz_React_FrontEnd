import React, { useContext, useEffect, useState } from "react";
import Banner from "../components/category/Component/banner";

import CategoryProductsList from "../components/category/Pages/CategoryContent";
import Header from "../components/Shared/includes/header";
import Footer from "../components/Shared/includes/footer";
import { AuthContext } from "../components/Shared/context/AuthContext";
import { useHttpClient } from "../components/Shared/hooks/http-hook";

const ProductCategory = () => {
  const { isLoggedIn, logout } = useContext(AuthContext);
  const [products, setProducts] = useState();
  const { sendRequest } = useHttpClient();

  useEffect(() => {
    const fetchProducts = async () => {
      let products;
      try {
        products = await sendRequest(
          process.env.REACT_APP_BACKEND_URL + "/products"
        );
        // console.log(products.products);
        setProducts(products.products);
      } catch (error) {
        // console.log(error);
      }
    };
    fetchProducts();
  }, [sendRequest]);

  // console.log(products);

  return (
    <React.Fragment>
      <Header isLoggedIn={isLoggedIn} logout={logout} />
      <Banner />

      <CategoryProductsList products={products} />
      <Footer />
    </React.Fragment>
  );
};

export default ProductCategory;
