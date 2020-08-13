import React from 'react';
import ProductInfo from '../container/post/ProductInfo';
import ProductTes from '../container/post/ProductTes'
import HeaderContainer from "../container/common/HeaderContainer"

const ProductPage = () => {
  return (
    <div>
      <HeaderContainer />
      {/* <ProductInfo /> */}
      <ProductTes/>
    </div>
  );
};

export default ProductPage;
