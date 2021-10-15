import React from "react";
import HeaderImage from "../../atoms/HeaderImage/HeaderImage";
import Product from "../../molecules/Product/Product";
import ProductRow from "../../organisms/ProductRow/ProductRow";

import "./Home.css";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <HeaderImage />
        <ProductRow />
      </div>
    </div>
  );
}

export default Home;
