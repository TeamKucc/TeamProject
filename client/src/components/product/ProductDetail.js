import React, { Fragment } from 'react';

const ProductDetail = ({ product }) => {
  if (!product) return null;

  const numberWithCommas = (x) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  };

  return (
    <div className="product-details-content ml-70">
      <h2>{product.title}</h2>
      <div className="product-details-price">
        {product.discount !== null ? (
          <Fragment>
            <span>{numberWithCommas(product.discount)} 원</span>{' '}
            <span className="old">{numberWithCommas(product.price)} 원</span>
          </Fragment>
        ) : (
          <span></span>
        )}
      </div>
      <div className="pro-details-list">
      <pre><p>{product.description}</p></pre>
      </div>
    </div>
  );
};

export default ProductDetail;
