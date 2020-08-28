import PropTypes from 'prop-types';
import React, { Fragment, useState, useEffect } from 'react';
// import { ListGroup, ListGroupItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ProductDescriptionInfo = ({
  product,
}) => {

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
        <p>
          {product.description}
        </p>
      </div>
    </div>
  );
};

ProductDescriptionInfo.propTypes = {
  addToast: PropTypes.func,
  cartItems: PropTypes.array,
  compareItem: PropTypes.array,
  currency: PropTypes.object,
  discountedPrice: PropTypes.number,
  finalDiscountedPrice: PropTypes.number,
  finalProductPrice: PropTypes.number,
  product: PropTypes.object,
  wishlistItem: PropTypes.object,
};

export default ProductDescriptionInfo;
