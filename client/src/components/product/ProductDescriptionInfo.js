import PropTypes from 'prop-types';
import React, { Fragment, useState, useEffect } from 'react';
// import { ListGroup, ListGroupItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ProductDescriptionInfo = ({
  product,
<<<<<<< HEAD:client/src/components/product/ProductTT.js
  // discountedPrice,
  // makeDeal,
  // onCheck,
  // onChange,
  // onClick,
  // changeRating,
  // review,
=======
  discountedPrice,
  onCheck,
>>>>>>> dcbe6a327a43a18ad336a9cb2a878c4ed6a70cd0:client/src/components/product/ProductDescriptionInfo.js
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
<<<<<<< HEAD:client/src/components/product/ProductTT.js
=======
      <div className="pro-details-quality">
        <div className="pro-details-cart btn-hover">
          {product.stock > 0 ? (
            <button className="btn-full" onClick={onCheck}>
              결제하기
            </button>
          ) : (
              <button disabled>Out of Stock</button>
            )}
        </div>
      </div>
      <div></div>
      <div className="pro-details-meta">
        <span>Category:{product.category}</span>
      </div>

      {product.tag ? (
        <div className="pro-details-meta">
          <span>Tags :</span>
          <ul>
            {product.tag.map((single, key) => {
              return (
                <li key={key}>
                  <Link to={process.env.PUBLIC_URL + '/shop-grid-standard'}>
                    {single}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      ) : (
          ''
        )}


>>>>>>> dcbe6a327a43a18ad336a9cb2a878c4ed6a70cd0:client/src/components/product/ProductDescriptionInfo.js
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
