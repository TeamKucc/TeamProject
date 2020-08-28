import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

const Search = ({ Products, id }) => {
  let Prod = Object.keys(Products).map(function (key) {
    return Products[key];
  });

  const renderCards = Prod.map((product, index) => {
    if (!product) return null;

    return (
      <div key={index} className={`col-xl-4 col-sm-6 `}>
        <div className={`product-wrap mb-25"`}>
          <br />
          <div className="product-img">
            <Link to={`/item/${product._id}`}>
              <img
                className="default-img"
                src={`${product.thumbnails[0].image.location}`}
                alt={`productImg-${index}`}
              />

              {product.thumbnails.length > 1 ? (
                <img
                  className="hover-img"
                  src={`${product.thumbnails[1].image.location}`}
                  alt=""
                />
              ) : (
                <img
                  className="hover-img"
                  src={`${product.thumbnails[0].image.location}`}
                  alt=""
                />
              )}
            </Link>
          </div>
          <div className="product-content text-center">
            <h3>
              <Link to={`/item/${product._id}`}>{product.title}</Link>
            </h3>
            <div className="product-price">
              {product.discount !== null ? (
                <Fragment>
                  <span>{product.discount}</span>{' '}
                  <span className="old">{product.price}</span>
                </Fragment>
              ) : (
                <span>{product.discount} </span>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  });

  return (
    <Fragment>
      <div className="shop-area pt-95 pb-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              {/* 카드 업로드 */}
              <div className="slider-content-3 slider-animated-1 text-center">
                <p className="animated">
                  {!Products[0] ?
                  <span>'{id}' 에 대한 검색결과가 없습니다 </span> 
                : <span>'{id}' 에 대한 검색결과 입니다 </span>
                }
                </p>
              </div>
              <div className="shop-bottom-area mt-35">
                <div className={`row grid three-column`}>{renderCards}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Search;
